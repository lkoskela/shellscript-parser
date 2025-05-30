
import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { BashListener } from "./BashListener.js";
import { BashVisitor } from "./BashVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class BashParser extends antlr.Parser {
    public static readonly TRAILING_COMMAND_SEPARATOR = 1;
    public static readonly COMMAND_SEPARATOR = 2;
    public static readonly SIMPLE_COMMAND_EXECUTABLE = 3;
    public static readonly SIMPLE_COMMAND_ELEMENT = 4;
    public static readonly MULTILINE_COMMAND_ASSIGNMENTS = 5;
    public static readonly MULTILINE_COMMAND_LINE = 6;
    public static readonly TRAILING_WHITESPACE = 7;
    public static readonly WHITESPACE = 8;
    public static readonly EQUALS = 9;
    public static readonly REDIRECTION = 10;
    public static readonly LINE_CONTINUATION = 11;
    public static readonly NEWLINE = 12;
    public static readonly QUOTED_EXPRESSION = 13;
    public static readonly SLANTQUOTED_EXPRESSION = 14;
    public static readonly DOUBLEQUOTED_EXPRESSION = 15;
    public static readonly SINGLEQUOTED_EXPRESSION = 16;
    public static readonly UNQUOTED_EXPRESSION = 17;
    public static readonly ASSIGNMENT = 18;
    public static readonly VARIABLE_NAME = 19;
    public static readonly WORD = 20;
    public static readonly VARIABLE_VALUE = 21;
    public static readonly COMMENT = 22;
    public static readonly ANY = 23;
    public static readonly RULE_prog = 0;
    public static readonly RULE_command = 1;
    public static readonly RULE_singleline_command = 2;
    public static readonly RULE_multiline_command = 3;

    public static readonly literalNames = [
        null, null, null, null, null, null, null, null, null, "'='"
    ];

    public static readonly symbolicNames = [
        null, "TRAILING_COMMAND_SEPARATOR", "COMMAND_SEPARATOR", "SIMPLE_COMMAND_EXECUTABLE", 
        "SIMPLE_COMMAND_ELEMENT", "MULTILINE_COMMAND_ASSIGNMENTS", "MULTILINE_COMMAND_LINE", 
        "TRAILING_WHITESPACE", "WHITESPACE", "EQUALS", "REDIRECTION", "LINE_CONTINUATION", 
        "NEWLINE", "QUOTED_EXPRESSION", "SLANTQUOTED_EXPRESSION", "DOUBLEQUOTED_EXPRESSION", 
        "SINGLEQUOTED_EXPRESSION", "UNQUOTED_EXPRESSION", "ASSIGNMENT", 
        "VARIABLE_NAME", "WORD", "VARIABLE_VALUE", "COMMENT", "ANY"
    ];
    public static readonly ruleNames = [
        "prog", "command", "singleline_command", "multiline_command",
    ];

    public get grammarFileName(): string { return "Bash.g4"; }
    public get literalNames(): (string | null)[] { return BashParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return BashParser.symbolicNames; }
    public get ruleNames(): string[] { return BashParser.ruleNames; }
    public get serializedATN(): number[] { return BashParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, BashParser._ATN, BashParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, BashParser.RULE_prog);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 8;
            this.command();
            this.state = 13;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 2) {
                {
                {
                this.state = 9;
                this.match(BashParser.COMMAND_SEPARATOR);
                this.state = 10;
                this.command();
                }
                }
                this.state = 15;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 17;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 16;
                this.match(BashParser.TRAILING_COMMAND_SEPARATOR);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public command(): CommandContext {
        let localContext = new CommandContext(this.context, this.state);
        this.enterRule(localContext, 2, BashParser.RULE_command);
        try {
            this.state = 21;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case BashParser.MULTILINE_COMMAND_LINE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 19;
                this.multiline_command();
                }
                break;
            case BashParser.SIMPLE_COMMAND_EXECUTABLE:
            case BashParser.ASSIGNMENT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 20;
                this.singleline_command();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public singleline_command(): Singleline_commandContext {
        let localContext = new Singleline_commandContext(this.context, this.state);
        this.enterRule(localContext, 4, BashParser.RULE_singleline_command);
        let _la: number;
        try {
            let alternative: number;
            this.state = 59;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case BashParser.SIMPLE_COMMAND_EXECUTABLE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 23;
                this.match(BashParser.SIMPLE_COMMAND_EXECUTABLE);
                this.state = 28;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 24;
                        this.match(BashParser.WHITESPACE);
                        this.state = 25;
                        this.match(BashParser.SIMPLE_COMMAND_ELEMENT);
                        }
                        }
                    }
                    this.state = 30;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
                }
                this.state = 35;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 8) {
                    {
                    {
                    this.state = 31;
                    this.match(BashParser.WHITESPACE);
                    this.state = 32;
                    this.match(BashParser.REDIRECTION);
                    }
                    }
                    this.state = 37;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case BashParser.ASSIGNMENT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 40;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                do {
                    {
                    {
                    this.state = 38;
                    this.match(BashParser.ASSIGNMENT);
                    this.state = 39;
                    this.match(BashParser.WHITESPACE);
                    }
                    }
                    this.state = 42;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                } while (_la === 18);
                this.state = 44;
                this.match(BashParser.SIMPLE_COMMAND_EXECUTABLE);
                this.state = 49;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 45;
                        this.match(BashParser.WHITESPACE);
                        this.state = 46;
                        this.match(BashParser.SIMPLE_COMMAND_ELEMENT);
                        }
                        }
                    }
                    this.state = 51;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 6, this.context);
                }
                this.state = 56;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 8) {
                    {
                    {
                    this.state = 52;
                    this.match(BashParser.WHITESPACE);
                    this.state = 53;
                    this.match(BashParser.REDIRECTION);
                    }
                    }
                    this.state = 58;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public multiline_command(): Multiline_commandContext {
        let localContext = new Multiline_commandContext(this.context, this.state);
        this.enterRule(localContext, 6, BashParser.RULE_multiline_command);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 61;
            this.match(BashParser.MULTILINE_COMMAND_LINE);
            this.state = 66;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 11) {
                {
                {
                this.state = 62;
                this.match(BashParser.LINE_CONTINUATION);
                this.state = 63;
                this.match(BashParser.MULTILINE_COMMAND_LINE);
                }
                }
                this.state = 68;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,23,70,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,1,0,1,0,1,0,5,0,12,8,0,
        10,0,12,0,15,9,0,1,0,3,0,18,8,0,1,1,1,1,3,1,22,8,1,1,2,1,2,1,2,5,
        2,27,8,2,10,2,12,2,30,9,2,1,2,1,2,5,2,34,8,2,10,2,12,2,37,9,2,1,
        2,1,2,4,2,41,8,2,11,2,12,2,42,1,2,1,2,1,2,5,2,48,8,2,10,2,12,2,51,
        9,2,1,2,1,2,5,2,55,8,2,10,2,12,2,58,9,2,3,2,60,8,2,1,3,1,3,1,3,5,
        3,65,8,3,10,3,12,3,68,9,3,1,3,0,0,4,0,2,4,6,0,0,75,0,8,1,0,0,0,2,
        21,1,0,0,0,4,59,1,0,0,0,6,61,1,0,0,0,8,13,3,2,1,0,9,10,5,2,0,0,10,
        12,3,2,1,0,11,9,1,0,0,0,12,15,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,
        0,14,17,1,0,0,0,15,13,1,0,0,0,16,18,5,1,0,0,17,16,1,0,0,0,17,18,
        1,0,0,0,18,1,1,0,0,0,19,22,3,6,3,0,20,22,3,4,2,0,21,19,1,0,0,0,21,
        20,1,0,0,0,22,3,1,0,0,0,23,28,5,3,0,0,24,25,5,8,0,0,25,27,5,4,0,
        0,26,24,1,0,0,0,27,30,1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,35,
        1,0,0,0,30,28,1,0,0,0,31,32,5,8,0,0,32,34,5,10,0,0,33,31,1,0,0,0,
        34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,60,1,0,0,0,37,35,1,
        0,0,0,38,39,5,18,0,0,39,41,5,8,0,0,40,38,1,0,0,0,41,42,1,0,0,0,42,
        40,1,0,0,0,42,43,1,0,0,0,43,44,1,0,0,0,44,49,5,3,0,0,45,46,5,8,0,
        0,46,48,5,4,0,0,47,45,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,
        1,0,0,0,50,56,1,0,0,0,51,49,1,0,0,0,52,53,5,8,0,0,53,55,5,10,0,0,
        54,52,1,0,0,0,55,58,1,0,0,0,56,54,1,0,0,0,56,57,1,0,0,0,57,60,1,
        0,0,0,58,56,1,0,0,0,59,23,1,0,0,0,59,40,1,0,0,0,60,5,1,0,0,0,61,
        66,5,6,0,0,62,63,5,11,0,0,63,65,5,6,0,0,64,62,1,0,0,0,65,68,1,0,
        0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,7,1,0,0,0,68,66,1,0,0,0,10,13,
        17,21,28,35,42,49,56,59,66
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!BashParser.__ATN) {
            BashParser.__ATN = new antlr.ATNDeserializer().deserialize(BashParser._serializedATN);
        }

        return BashParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(BashParser.literalNames, BashParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return BashParser.vocabulary;
    }

    private static readonly decisionsToDFA = BashParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public command(): CommandContext[];
    public command(i: number): CommandContext | null;
    public command(i?: number): CommandContext[] | CommandContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CommandContext);
        }

        return this.getRuleContext(i, CommandContext);
    }
    public COMMAND_SEPARATOR(): antlr.TerminalNode[];
    public COMMAND_SEPARATOR(i: number): antlr.TerminalNode | null;
    public COMMAND_SEPARATOR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(BashParser.COMMAND_SEPARATOR);
    	} else {
    		return this.getToken(BashParser.COMMAND_SEPARATOR, i);
    	}
    }
    public TRAILING_COMMAND_SEPARATOR(): antlr.TerminalNode | null {
        return this.getToken(BashParser.TRAILING_COMMAND_SEPARATOR, 0);
    }
    public override get ruleIndex(): number {
        return BashParser.RULE_prog;
    }
    public override enterRule(listener: BashListener): void {
        if(listener.enterProg) {
             listener.enterProg(this);
        }
    }
    public override exitRule(listener: BashListener): void {
        if(listener.exitProg) {
             listener.exitProg(this);
        }
    }
    public override accept<Result>(visitor: BashVisitor<Result>): Result | null {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CommandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public multiline_command(): Multiline_commandContext | null {
        return this.getRuleContext(0, Multiline_commandContext);
    }
    public singleline_command(): Singleline_commandContext | null {
        return this.getRuleContext(0, Singleline_commandContext);
    }
    public override get ruleIndex(): number {
        return BashParser.RULE_command;
    }
    public override enterRule(listener: BashListener): void {
        if(listener.enterCommand) {
             listener.enterCommand(this);
        }
    }
    public override exitRule(listener: BashListener): void {
        if(listener.exitCommand) {
             listener.exitCommand(this);
        }
    }
    public override accept<Result>(visitor: BashVisitor<Result>): Result | null {
        if (visitor.visitCommand) {
            return visitor.visitCommand(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Singleline_commandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SIMPLE_COMMAND_EXECUTABLE(): antlr.TerminalNode {
        return this.getToken(BashParser.SIMPLE_COMMAND_EXECUTABLE, 0)!;
    }
    public WHITESPACE(): antlr.TerminalNode[];
    public WHITESPACE(i: number): antlr.TerminalNode | null;
    public WHITESPACE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(BashParser.WHITESPACE);
    	} else {
    		return this.getToken(BashParser.WHITESPACE, i);
    	}
    }
    public SIMPLE_COMMAND_ELEMENT(): antlr.TerminalNode[];
    public SIMPLE_COMMAND_ELEMENT(i: number): antlr.TerminalNode | null;
    public SIMPLE_COMMAND_ELEMENT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(BashParser.SIMPLE_COMMAND_ELEMENT);
    	} else {
    		return this.getToken(BashParser.SIMPLE_COMMAND_ELEMENT, i);
    	}
    }
    public REDIRECTION(): antlr.TerminalNode[];
    public REDIRECTION(i: number): antlr.TerminalNode | null;
    public REDIRECTION(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(BashParser.REDIRECTION);
    	} else {
    		return this.getToken(BashParser.REDIRECTION, i);
    	}
    }
    public ASSIGNMENT(): antlr.TerminalNode[];
    public ASSIGNMENT(i: number): antlr.TerminalNode | null;
    public ASSIGNMENT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(BashParser.ASSIGNMENT);
    	} else {
    		return this.getToken(BashParser.ASSIGNMENT, i);
    	}
    }
    public override get ruleIndex(): number {
        return BashParser.RULE_singleline_command;
    }
    public override enterRule(listener: BashListener): void {
        if(listener.enterSingleline_command) {
             listener.enterSingleline_command(this);
        }
    }
    public override exitRule(listener: BashListener): void {
        if(listener.exitSingleline_command) {
             listener.exitSingleline_command(this);
        }
    }
    public override accept<Result>(visitor: BashVisitor<Result>): Result | null {
        if (visitor.visitSingleline_command) {
            return visitor.visitSingleline_command(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Multiline_commandContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MULTILINE_COMMAND_LINE(): antlr.TerminalNode[];
    public MULTILINE_COMMAND_LINE(i: number): antlr.TerminalNode | null;
    public MULTILINE_COMMAND_LINE(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(BashParser.MULTILINE_COMMAND_LINE);
    	} else {
    		return this.getToken(BashParser.MULTILINE_COMMAND_LINE, i);
    	}
    }
    public LINE_CONTINUATION(): antlr.TerminalNode[];
    public LINE_CONTINUATION(i: number): antlr.TerminalNode | null;
    public LINE_CONTINUATION(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(BashParser.LINE_CONTINUATION);
    	} else {
    		return this.getToken(BashParser.LINE_CONTINUATION, i);
    	}
    }
    public override get ruleIndex(): number {
        return BashParser.RULE_multiline_command;
    }
    public override enterRule(listener: BashListener): void {
        if(listener.enterMultiline_command) {
             listener.enterMultiline_command(this);
        }
    }
    public override exitRule(listener: BashListener): void {
        if(listener.exitMultiline_command) {
             listener.exitMultiline_command(this);
        }
    }
    public override accept<Result>(visitor: BashVisitor<Result>): Result | null {
        if (visitor.visitMultiline_command) {
            return visitor.visitMultiline_command(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
