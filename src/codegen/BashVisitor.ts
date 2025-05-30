
import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgContext } from "./BashParser.js";
import { CommandContext } from "./BashParser.js";
import { Singleline_commandContext } from "./BashParser.js";
import { Multiline_commandContext } from "./BashParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `BashParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class BashVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `BashParser.prog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProg?: (ctx: ProgContext) => Result;
    /**
     * Visit a parse tree produced by `BashParser.command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCommand?: (ctx: CommandContext) => Result;
    /**
     * Visit a parse tree produced by `BashParser.singleline_command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleline_command?: (ctx: Singleline_commandContext) => Result;
    /**
     * Visit a parse tree produced by `BashParser.multiline_command`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiline_command?: (ctx: Multiline_commandContext) => Result;
}

