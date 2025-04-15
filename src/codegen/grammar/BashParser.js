// Generated from ./grammar/Bash.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import BashVisitor from './BashVisitor.js';

const serializedATN = [4,1,16,94,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,5,0,22,8,0,10,0,12,0,25,9,0,
1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,5,3,36,8,3,10,3,12,3,39,9,3,1,3,3,3,
42,8,3,1,3,1,3,1,3,5,3,47,8,3,10,3,12,3,50,9,3,1,3,1,3,1,3,1,3,5,3,56,8,
3,10,3,12,3,59,9,3,1,3,3,3,62,8,3,3,3,64,8,3,1,4,1,4,1,5,1,5,1,6,4,6,71,
8,6,11,6,12,6,72,1,7,5,7,76,8,7,10,7,12,7,79,9,7,1,7,1,7,1,8,1,8,1,8,5,8,
86,8,8,10,8,12,8,89,9,8,1,8,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,3,
2,0,1,1,6,6,2,0,9,10,14,14,3,0,2,2,9,10,14,14,94,0,18,1,0,0,0,2,28,1,0,0,
0,4,30,1,0,0,0,6,63,1,0,0,0,8,65,1,0,0,0,10,67,1,0,0,0,12,70,1,0,0,0,14,
77,1,0,0,0,16,82,1,0,0,0,18,23,3,2,1,0,19,20,7,0,0,0,20,22,3,2,1,0,21,19,
1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,26,1,0,0,0,25,23,1,
0,0,0,26,27,5,0,0,1,27,1,1,0,0,0,28,29,3,6,3,0,29,3,1,0,0,0,30,31,5,12,0,
0,31,5,1,0,0,0,32,37,3,8,4,0,33,34,5,2,0,0,34,36,3,10,5,0,35,33,1,0,0,0,
36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,40,
42,3,12,6,0,41,40,1,0,0,0,41,42,1,0,0,0,42,64,1,0,0,0,43,48,3,4,2,0,44,45,
5,2,0,0,45,47,3,4,2,0,46,44,1,0,0,0,47,50,1,0,0,0,48,46,1,0,0,0,48,49,1,
0,0,0,49,51,1,0,0,0,50,48,1,0,0,0,51,52,5,2,0,0,52,57,3,8,4,0,53,54,5,2,
0,0,54,56,3,10,5,0,55,53,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,
0,58,61,1,0,0,0,59,57,1,0,0,0,60,62,3,12,6,0,61,60,1,0,0,0,61,62,1,0,0,0,
62,64,1,0,0,0,63,32,1,0,0,0,63,43,1,0,0,0,64,7,1,0,0,0,65,66,7,1,0,0,66,
9,1,0,0,0,67,68,7,2,0,0,68,11,1,0,0,0,69,71,5,4,0,0,70,69,1,0,0,0,71,72,
1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,13,1,0,0,0,74,76,3,4,2,0,75,74,1,
0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,80,1,0,0,0,79,77,1,0,
0,0,80,81,3,16,8,0,81,15,1,0,0,0,82,87,3,10,5,0,83,84,5,2,0,0,84,86,3,10,
5,0,85,83,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,90,1,0,0,
0,89,87,1,0,0,0,90,91,5,5,0,0,91,92,3,16,8,0,92,17,1,0,0,0,10,23,37,41,48,
57,61,63,72,77,87];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class BashParser extends antlr4.Parser {

    static grammarFileName = "Bash.g4";
    static literalNames = [ null, "';'", null, "'='" ];
    static symbolicNames = [ null, null, "WHITESPACE", "EQUALS", "REDIRECTION", 
                             "LINE_CONTINUATION", "NEWLINE", "QUOTED_EXPRESSION", 
                             "SLANTQUOTED_EXPRESSION", "DOUBLEQUOTED_EXPRESSION", 
                             "SINGLEQUOTED_EXPRESSION", "UNQUOTED_EXPRESSION", 
                             "ASSIGNMENT", "VARIABLE_NAME", "WORD", "VARIABLE_VALUE", 
                             "ANY" ];
    static ruleNames = [ "prog", "command", "assignment", "simple_command", 
                         "simple_command_executable", "simple_command_element", 
                         "redirection_list", "multiline_command", "multiline_command_line" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = BashParser.ruleNames;
        this.literalNames = BashParser.literalNames;
        this.symbolicNames = BashParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, BashParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.command();
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===6) {
	            this.state = 19;
	            _la = this._input.LA(1);
	            if(!(_la===1 || _la===6)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 20;
	            this.command();
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 26;
	        this.match(BashParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, BashParser.RULE_command);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.simple_command();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, BashParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(BashParser.ASSIGNMENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simple_command() {
	    let localctx = new Simple_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, BashParser.RULE_simple_command);
	    var _la = 0;
	    try {
	        this.state = 63;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	        case 10:
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 32;
	            this.simple_command_executable();
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 33;
	                this.match(BashParser.WHITESPACE);
	                this.state = 34;
	                this.simple_command_element();
	                this.state = 39;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 40;
	                this.redirection_list();
	            }

	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.assignment();
	            this.state = 48;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 44;
	                    this.match(BashParser.WHITESPACE);
	                    this.state = 45;
	                    this.assignment(); 
	                }
	                this.state = 50;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	            }

	            this.state = 51;
	            this.match(BashParser.WHITESPACE);
	            this.state = 52;
	            this.simple_command_executable();
	            this.state = 57;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 53;
	                this.match(BashParser.WHITESPACE);
	                this.state = 54;
	                this.simple_command_element();
	                this.state = 59;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 60;
	                this.redirection_list();
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simple_command_executable() {
	    let localctx = new Simple_command_executableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, BashParser.RULE_simple_command_executable);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 17920) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simple_command_element() {
	    let localctx = new Simple_command_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, BashParser.RULE_simple_command_element);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 17924) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	redirection_list() {
	    let localctx = new Redirection_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, BashParser.RULE_redirection_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 69;
	            this.match(BashParser.REDIRECTION);
	            this.state = 72; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiline_command() {
	    let localctx = new Multiline_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, BashParser.RULE_multiline_command);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 74;
	            this.assignment();
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 80;
	        this.multiline_command_line();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiline_command_line() {
	    let localctx = new Multiline_command_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, BashParser.RULE_multiline_command_line);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.simple_command_element();
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 83;
	            this.match(BashParser.WHITESPACE);
	            this.state = 84;
	            this.simple_command_element();
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 90;
	        this.match(BashParser.LINE_CONTINUATION);
	        this.state = 91;
	        this.multiline_command_line();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

BashParser.EOF = antlr4.Token.EOF;
BashParser.T__0 = 1;
BashParser.WHITESPACE = 2;
BashParser.EQUALS = 3;
BashParser.REDIRECTION = 4;
BashParser.LINE_CONTINUATION = 5;
BashParser.NEWLINE = 6;
BashParser.QUOTED_EXPRESSION = 7;
BashParser.SLANTQUOTED_EXPRESSION = 8;
BashParser.DOUBLEQUOTED_EXPRESSION = 9;
BashParser.SINGLEQUOTED_EXPRESSION = 10;
BashParser.UNQUOTED_EXPRESSION = 11;
BashParser.ASSIGNMENT = 12;
BashParser.VARIABLE_NAME = 13;
BashParser.WORD = 14;
BashParser.VARIABLE_VALUE = 15;
BashParser.ANY = 16;

BashParser.RULE_prog = 0;
BashParser.RULE_command = 1;
BashParser.RULE_assignment = 2;
BashParser.RULE_simple_command = 3;
BashParser.RULE_simple_command_executable = 4;
BashParser.RULE_simple_command_element = 5;
BashParser.RULE_redirection_list = 6;
BashParser.RULE_multiline_command = 7;
BashParser.RULE_multiline_command_line = 8;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_prog;
    }

	command = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandContext);
	    } else {
	        return this.getTypedRuleContext(CommandContext,i);
	    }
	};

	EOF() {
	    return this.getToken(BashParser.EOF, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.NEWLINE);
	    } else {
	        return this.getToken(BashParser.NEWLINE, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof BashVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_command;
    }

	simple_command() {
	    return this.getTypedRuleContext(Simple_commandContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof BashVisitor ) {
	        return visitor.visitCommand(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_assignment;
    }

	ASSIGNMENT() {
	    return this.getToken(BashParser.ASSIGNMENT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof BashVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Simple_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_simple_command;
    }

	simple_command_executable() {
	    return this.getTypedRuleContext(Simple_command_executableContext,0);
	};

	WHITESPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.WHITESPACE);
	    } else {
	        return this.getToken(BashParser.WHITESPACE, i);
	    }
	};


	simple_command_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Simple_command_elementContext);
	    } else {
	        return this.getTypedRuleContext(Simple_command_elementContext,i);
	    }
	};

	redirection_list() {
	    return this.getTypedRuleContext(Redirection_listContext,0);
	};

	assignment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignmentContext);
	    } else {
	        return this.getTypedRuleContext(AssignmentContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof BashVisitor ) {
	        return visitor.visitSimple_command(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Simple_command_executableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_simple_command_executable;
    }

	WORD() {
	    return this.getToken(BashParser.WORD, 0);
	};

	DOUBLEQUOTED_EXPRESSION() {
	    return this.getToken(BashParser.DOUBLEQUOTED_EXPRESSION, 0);
	};

	SINGLEQUOTED_EXPRESSION() {
	    return this.getToken(BashParser.SINGLEQUOTED_EXPRESSION, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof BashVisitor ) {
	        return visitor.visitSimple_command_executable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Simple_command_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_simple_command_element;
    }

	WORD() {
	    return this.getToken(BashParser.WORD, 0);
	};

	DOUBLEQUOTED_EXPRESSION() {
	    return this.getToken(BashParser.DOUBLEQUOTED_EXPRESSION, 0);
	};

	SINGLEQUOTED_EXPRESSION() {
	    return this.getToken(BashParser.SINGLEQUOTED_EXPRESSION, 0);
	};

	WHITESPACE() {
	    return this.getToken(BashParser.WHITESPACE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof BashVisitor ) {
	        return visitor.visitSimple_command_element(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Redirection_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_redirection_list;
    }

	REDIRECTION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.REDIRECTION);
	    } else {
	        return this.getToken(BashParser.REDIRECTION, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof BashVisitor ) {
	        return visitor.visitRedirection_list(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Multiline_commandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_multiline_command;
    }

	multiline_command_line() {
	    return this.getTypedRuleContext(Multiline_command_lineContext,0);
	};

	assignment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignmentContext);
	    } else {
	        return this.getTypedRuleContext(AssignmentContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof BashVisitor ) {
	        return visitor.visitMultiline_command(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Multiline_command_lineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BashParser.RULE_multiline_command_line;
    }

	simple_command_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Simple_command_elementContext);
	    } else {
	        return this.getTypedRuleContext(Simple_command_elementContext,i);
	    }
	};

	LINE_CONTINUATION() {
	    return this.getToken(BashParser.LINE_CONTINUATION, 0);
	};

	multiline_command_line() {
	    return this.getTypedRuleContext(Multiline_command_lineContext,0);
	};

	WHITESPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.WHITESPACE);
	    } else {
	        return this.getToken(BashParser.WHITESPACE, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof BashVisitor ) {
	        return visitor.visitMultiline_command_line(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




BashParser.ProgContext = ProgContext; 
BashParser.CommandContext = CommandContext; 
BashParser.AssignmentContext = AssignmentContext; 
BashParser.Simple_commandContext = Simple_commandContext; 
BashParser.Simple_command_executableContext = Simple_command_executableContext; 
BashParser.Simple_command_elementContext = Simple_command_elementContext; 
BashParser.Redirection_listContext = Redirection_listContext; 
BashParser.Multiline_commandContext = Multiline_commandContext; 
BashParser.Multiline_command_lineContext = Multiline_command_lineContext; 
