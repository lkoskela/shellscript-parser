import antlr4 from 'antlr4';
import RuleContext from 'antlr4/context/RuleContext.js';

import BashLexer from './codegen/grammar/BashLexer.js';
import BashParser from './codegen/grammar/BashParser.js';
import BashVisitor from './codegen/grammar/BashVisitor.js';

import printTokenStream from './utils/Debugger';

type CodeGenParser = {
    ruleNames: string[]
}

type ShellParserOutput = {
    commands: string[],
    tokens: string[],
    log: string[],
}

/**
 * Visitor for walking through the ANTLR4 parse tree and extracting the shell
 * commands we're looking for into an array of strings along with gathering a
 * log for debugging purposes.
 */
class Visitor extends BashVisitor {
    readonly ruleNames: string[];
    readonly commands: string[];
    readonly log: string[];

    constructor(parser: CodeGenParser) {
        super();
        this.ruleNames = parser.ruleNames;
        this.commands = [];
        this.log = [];
    }

    describeContext(ctx: RuleContext) {
        let index = (ctx.getRuleContext() as antlr4.ParserRuleContext).ruleIndex;
        let name = this.ruleNames[index] || index;
        return { name, text: ctx.getText() };
    }

    visitChildren(ctx: RuleContext) {
        if (!ctx) {
            return;
        }
        let node = this.describeContext(ctx);
        let indent = ''.padStart(ctx.depth() * 2, ' ')
        this.log.push(`${indent}${node.name}: ${JSON.stringify(node.text)}`);
        if (node.name === 'command' && node.text.trim().length > 0) {
            this.commands.push(node.text.trim());
        }
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

    const tokenStream = printTokenStream(tokens, lexer);

    const parser = new BashParser(tokens);
    parser.buildParseTrees = true;
    let visitor = new Visitor(parser);
    const tree = parser.prog();
    tree.accept(visitor);
    return { commands: visitor.commands, tokens: tokenStream, log: visitor.log };
}

export default parse;
