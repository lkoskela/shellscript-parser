import antlr4, { Lexer } from "antlr4";
import RuleContext from "antlr4/context/RuleContext.js";
import BashLexer from "./codegen/grammar/BashLexer.js";
import BashParser from "./codegen/grammar/BashParser.js";
import BashVisitor from "./codegen/grammar/BashVisitor.js";

import printTokenStream from "./utils/Debugger";
import Token from "antlr4/Token.js";
import ParserRuleContext from "antlr4/context/ParserRuleContext.js";
import CommonTokenStream from "antlr4/CommonTokenStream.js";

type CodeGenParser = {
    ruleNames: string[];
};

type ShellParserOutput = {
    commands: string[];
    tokens: string[];
    log: string[];
};

/**
 * Visitor for walking through the ANTLR4 parse tree and extracting the shell
 * commands we're looking for into an array of strings along with gathering a
 * log for debugging purposes.
 */
class Visitor extends BashVisitor {
    readonly ruleNames: string[];
    readonly commands: string[];
    readonly log: string[];

    // Visit a parse tree produced by BashParser#prog.
    visitProg(ctx: antlr4.RuleContext) {
        const text = (ctx as antlr4.ParserRuleContext).getText();
        //console.error(`visitProg(${JSON.stringify(text)})`);
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by BashParser#command.
    visitCommand(ctx: antlr4.RuleContext) {
        const text = (ctx as antlr4.ParserRuleContext).getText();
        //console.error(`visitCommand(${JSON.stringify(text)})`);
        if (text.trim().length > 0) {
            this.commands.push(text.trim());
        }
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by BashParser#assignment.
    visitAssignment(ctx: antlr4.RuleContext) {
        const text = (ctx as antlr4.ParserRuleContext).getText();
        //console.error(`visitAssignment(${JSON.stringify(text)})`);
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by BashParser#simple_command_element.
    visitSimple_command_element(ctx: antlr4.RuleContext) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by BashParser#redirection_list.
    visitRedirection_list(ctx: antlr4.RuleContext) {
        const text = (ctx as antlr4.ParserRuleContext).getText();
        //console.error(`visitRedirection_list(${JSON.stringify(text)})`);
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by BashParser#multiline_command.
    visitMultiline_command(ctx: antlr4.RuleContext) {
        const text = (ctx as antlr4.ParserRuleContext).getText();
        // console.error(`visitMultiline_command(${JSON.stringify(text)})`);
        if (text.trim().length > 0) {
            this.commands.push(text.trim());
        }
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by BashParser#multiline_command_line.
    visitMultiline_command_line(ctx: antlr4.RuleContext) {
        return this.visitChildren(ctx);
    }

    // Visit a parse tree produced by BashParser#simple_command.
    visitSimple_command(ctx: antlr4.RuleContext) {
        const text = (ctx as antlr4.ParserRuleContext).getText();
        // console.error(`visitSimple_command(${JSON.stringify(text)})`);
        return this.visitChildren(ctx);
    }

    constructor(parser: CodeGenParser) {
        super();
        this.ruleNames = parser.ruleNames;
        this.commands = [];
        this.log = [];
    }

    describeContext(ctx: antlr4.RuleContext) {
        let index = ctx.ruleContext.invokingState;
        //let index = (ctx.getRuleContext() as ParserRuleContext).ruleIndex;
        let name = this.ruleNames[index] || index;
        return { name, text: ctx.getText() };
    }

    visitChildren(ctx: antlr4.RuleContext) {
        function countParentContexts(ctx: antlr4.RuleContext): number {
            let count = 0;
            let parent = ctx.parentCtx;
            while (parent) {
                count++;
                parent = parent.parentCtx;
            }
            return count;
        }
        if (!ctx) {
            return;
        }
        let depth = countParentContexts(ctx);
        let node = this.describeContext(ctx);
        let indent = "".padStart(depth * 2, " ");
        this.log.push(`${indent}${node.name}: ${JSON.stringify(node.text)}`);
        if ((ctx as any).children) {
            return (ctx as any).children.map((child: any) => {
                if (child.children && child.children.length != 0) {
                    return child.accept(this);
                } else {
                    return child.getText();
                }
            });
        }
    }
}

/**
 * Parse the given input string as one or more shell commands.
 *
 * @param input [string] the shell command(s) to parse
 * @returns {@type ShellParserOutput}
 */
const parse = (input: string): ShellParserOutput => {
    const chars = new antlr4.InputStream(input);
    const lexer = new BashLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);

    // Print all tokens for debugging
    tokens.fill();
    const tokenStream: string[] = [];
    for (let i = 0; i < tokens.tokens.length; i++) {
        const token = tokens.tokens[i];
        if (token.type !== -1) { // Skip EOF token
            tokenStream.push(`${BashLexer.symbolicNames[token.type]}: '${token.text}'`);
        }
    }

    const parser = new BashParser(tokens);
    parser.buildParseTrees = true;
    // Remove the default error listener that writes to stderr
    parser.removeErrorListeners();
    let visitor = new Visitor(parser);
    // console.error(`Input: ${JSON.stringify(input)}`);
    // console.error(`Tokens: ${JSON.stringify(tokenStream)}`);
    const tree = parser.prog();
    tree.accept(visitor);
    return { commands: visitor.commands, tokens: tokenStream, log: visitor.log };
};

export default parse;
