
import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgContext } from "./BashParser.js";
import { CommandContext } from "./BashParser.js";
import { Singleline_commandContext } from "./BashParser.js";
import { Multiline_commandContext } from "./BashParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `BashParser`.
 */
export class BashListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `BashParser.prog`.
     * @param ctx the parse tree
     */
    enterProg?: (ctx: ProgContext) => void;
    /**
     * Exit a parse tree produced by `BashParser.prog`.
     * @param ctx the parse tree
     */
    exitProg?: (ctx: ProgContext) => void;
    /**
     * Enter a parse tree produced by `BashParser.command`.
     * @param ctx the parse tree
     */
    enterCommand?: (ctx: CommandContext) => void;
    /**
     * Exit a parse tree produced by `BashParser.command`.
     * @param ctx the parse tree
     */
    exitCommand?: (ctx: CommandContext) => void;
    /**
     * Enter a parse tree produced by `BashParser.singleline_command`.
     * @param ctx the parse tree
     */
    enterSingleline_command?: (ctx: Singleline_commandContext) => void;
    /**
     * Exit a parse tree produced by `BashParser.singleline_command`.
     * @param ctx the parse tree
     */
    exitSingleline_command?: (ctx: Singleline_commandContext) => void;
    /**
     * Enter a parse tree produced by `BashParser.multiline_command`.
     * @param ctx the parse tree
     */
    enterMultiline_command?: (ctx: Multiline_commandContext) => void;
    /**
     * Exit a parse tree produced by `BashParser.multiline_command`.
     * @param ctx the parse tree
     */
    exitMultiline_command?: (ctx: Multiline_commandContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

