import { ErrorNode, ParserRuleContext, ParseTree, TerminalNode, Token } from "antlr4ng";
import { BashLexer } from "./codegen/BashLexer.js";
import {
    BashParser,
    CommandContext,
    Multiline_commandContext,
    ProgContext,
    Singleline_commandContext,
} from "./codegen/BashParser.js";
import { BashVisitor } from "./codegen/BashVisitor.js";

type CodeGenParser = {
    ruleNames: string[];
};

type ShellParserOutput = {
    commands: string[];
};

type VisitorResult = {
    commands: string[];
};

/**
 * Visitor for walking through the ANTLR4 parse tree and extracting the shell
 * commands we're looking for into an array of strings along with gathering a
 * log for debugging purposes.
 */
class Visitor extends BashVisitor<VisitorResult> {
    readonly ruleNames: string[];
    commands: string[];

    constructor(parser: CodeGenParser) {
        super();
        this.ruleNames = parser.ruleNames;
        this.commands = [];

        this.visitProg = (ctx: ProgContext): VisitorResult => {
            const childCommands = ctx.children.flatMap((child) => {
                if (child instanceof CommandContext) {
                    return this.visitCommand?.(child)?.commands || [];
                }
                return [];
            });
            this.commands = childCommands;
            return {
                commands: childCommands,
            };
        };

        this.visitSingleline_command = (ctx: Singleline_commandContext): VisitorResult => {
            return {
                commands: [ctx.getText()],
            };
        };
        this.visitMultiline_command = (ctx: Multiline_commandContext): VisitorResult => {
            return {
                commands: [ctx.getText()],
            };
        };
        this.visitCommand = (ctx: CommandContext): VisitorResult => {
            const childCommands = ctx.children.flatMap((child) => {
                if (child instanceof Singleline_commandContext) {
                    return this.visitSingleline_command?.(child)?.commands || [];
                } else if (child instanceof Multiline_commandContext) {
                    return this.visitMultiline_command?.(child)?.commands || [];
                }
                return [];
            });
            return {
                commands: childCommands,
            };
        };
    }

    visitChildren(tree: ParseTree): VisitorResult | null {
        if (!tree) {
            return null;
        }
        for (let i = 0; i < tree.getChildCount(); i++) {
            const child = tree.getChild(i);
            if (child) {
                if (child.getChildCount() > 0) {
                    return child.accept(this);
                }
            }
        }
        return null;
    }
}

import { CharStream, CommonTokenStream } from "antlr4ng";
import { BashListener } from "./codegen/BashListener.js";

class ShellParserListener extends BashListener {
    readonly parser: BashParser;
    indent: number = 0;
    commands: string[] = [];

    constructor(parser: BashParser) {
        super();
        this.parser = parser;
        this.exitCommand = (ctx: CommandContext) => {
            const text = ctx.getText().trim();
            if (text.length > 0) {
                this.commands.push(text);
            }
        };
    }
}

/**
 * Parse the given input string as one or more shell commands.
 *
 * @param input [string] the shell command(s) to parse
 * @returns {@type ShellParserOutput}
 */
const parse = (input: string): ShellParserOutput => {
    const inputStream = CharStream.fromString(input);
    const lexer = new BashLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new BashParser(tokenStream);
    const listener = new ShellParserListener(parser);
    parser.addParseListener(listener);
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    const tree = parser.prog();
    let visitor = new Visitor(parser);
    tree.accept(visitor);
    return {
        commands: listener.commands,
    };
};

export default parse;
