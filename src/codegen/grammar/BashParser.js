// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import BashVisitor from './BashVisitor.js';

const serializedATN = [4,1,13,86,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,0,1,0,
1,1,1,1,1,2,1,2,1,2,1,2,3,2,33,8,2,1,3,1,3,1,4,4,4,38,8,4,11,4,12,4,39,1,
5,5,5,43,8,5,10,5,12,5,46,9,5,1,5,1,5,1,6,1,6,1,6,5,6,53,8,6,10,6,12,6,56,
9,6,1,6,1,6,1,6,1,7,4,7,62,8,7,11,7,12,7,63,1,7,1,7,1,7,1,7,5,7,70,8,7,10,
7,12,7,73,9,7,1,7,5,7,76,8,7,10,7,12,7,79,9,7,1,7,3,7,82,8,7,3,7,84,8,7,
1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,1,0,3,4,87,0,16,1,0,0,0,2,26,1,0,0,0,4,
28,1,0,0,0,6,34,1,0,0,0,8,37,1,0,0,0,10,44,1,0,0,0,12,49,1,0,0,0,14,83,1,
0,0,0,16,21,3,2,1,0,17,18,5,5,0,0,18,20,3,2,1,0,19,17,1,0,0,0,20,23,1,0,
0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,24,1,0,0,0,23,21,1,0,0,0,24,25,5,0,0,
1,25,1,1,0,0,0,26,27,3,14,7,0,27,3,1,0,0,0,28,29,5,11,0,0,29,30,5,1,0,0,
30,32,5,12,0,0,31,33,5,3,0,0,32,31,1,0,0,0,32,33,1,0,0,0,33,5,1,0,0,0,34,
35,5,12,0,0,35,7,1,0,0,0,36,38,5,2,0,0,37,36,1,0,0,0,38,39,1,0,0,0,39,37,
1,0,0,0,39,40,1,0,0,0,40,9,1,0,0,0,41,43,3,4,2,0,42,41,1,0,0,0,43,46,1,0,
0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,47,1,0,0,0,46,44,1,0,0,0,47,48,3,12,6,
0,48,11,1,0,0,0,49,54,3,6,3,0,50,51,5,3,0,0,51,53,3,6,3,0,52,50,1,0,0,0,
53,56,1,0,0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,57,1,0,0,0,56,54,1,0,0,0,57,
58,5,4,0,0,58,59,3,12,6,0,59,13,1,0,0,0,60,62,3,4,2,0,61,60,1,0,0,0,62,63,
1,0,0,0,63,61,1,0,0,0,63,64,1,0,0,0,64,65,1,0,0,0,65,66,3,14,7,0,66,84,1,
0,0,0,67,71,3,6,3,0,68,70,7,0,0,0,69,68,1,0,0,0,70,73,1,0,0,0,71,69,1,0,
0,0,71,72,1,0,0,0,72,77,1,0,0,0,73,71,1,0,0,0,74,76,3,6,3,0,75,74,1,0,0,
0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,
80,82,3,8,4,0,81,80,1,0,0,0,81,82,1,0,0,0,82,84,1,0,0,0,83,61,1,0,0,0,83,
67,1,0,0,0,84,15,1,0,0,0,10,21,32,39,44,54,63,71,77,81,83];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class BashParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'='" ];
    static symbolicNames = [ null, "EQUALS", "REDIRECTION", "WHITESPACE", 
                             "LINE_CONTINUATION", "COMMAND_SEPARATOR", "NEWLINE", 
                             "QUOTED_EXPRESSION", "DOUBLEQUOTED_EXPRESSION", 
                             "SINGLEQUOTED_EXPRESSION", "UNQUOTED_EXPRESSION", 
                             "VARIABLE_NAME", "WORD", "ANY" ];
    static ruleNames = [ "prog", "command", "assignment", "simple_command_element", 
                         "redirection_list", "multiline_command", "multiline_command_line", 
                         "simple_command" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = BashParser.ruleNames;
        this.literalNames = BashParser.literalNames;
        this.symbolicNames = BashParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, BashParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.command();
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 17;
	            this.match(BashParser.COMMAND_SEPARATOR);
	            this.state = 18;
	            this.command();
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 24;
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
	        this.state = 26;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(BashParser.VARIABLE_NAME);
	        this.state = 29;
	        this.match(BashParser.EQUALS);
	        this.state = 30;
	        this.match(BashParser.WORD);
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 31;
	            this.match(BashParser.WHITESPACE);
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
	    this.enterRule(localctx, 6, BashParser.RULE_simple_command_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(BashParser.WORD);
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
	    this.enterRule(localctx, 8, BashParser.RULE_redirection_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 36;
	            this.match(BashParser.REDIRECTION);
	            this.state = 39; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2);
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
	    this.enterRule(localctx, 10, BashParser.RULE_multiline_command);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 41;
	            this.assignment();
	            this.state = 46;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 47;
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
	    this.enterRule(localctx, 12, BashParser.RULE_multiline_command_line);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.simple_command_element();
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 50;
	            this.match(BashParser.WHITESPACE);
	            this.state = 51;
	            this.simple_command_element();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 57;
	        this.match(BashParser.LINE_CONTINUATION);
	        this.state = 58;
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



	simple_command() {
	    let localctx = new Simple_commandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, BashParser.RULE_simple_command);
	    var _la = 0; // Token type
	    try {
	        this.state = 83;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 61; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 60;
	            		this.assignment();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 63; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 65;
	            this.simple_command();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.simple_command_element();
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3 || _la===4) {
	                this.state = 68;
	                _la = this._input.LA(1);
	                if(!(_la===3 || _la===4)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 73;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 77;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===12) {
	                this.state = 74;
	                this.simple_command_element();
	                this.state = 79;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2) {
	                this.state = 80;
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


}

BashParser.EOF = antlr4.Token.EOF;
BashParser.EQUALS = 1;
BashParser.REDIRECTION = 2;
BashParser.WHITESPACE = 3;
BashParser.LINE_CONTINUATION = 4;
BashParser.COMMAND_SEPARATOR = 5;
BashParser.NEWLINE = 6;
BashParser.QUOTED_EXPRESSION = 7;
BashParser.DOUBLEQUOTED_EXPRESSION = 8;
BashParser.SINGLEQUOTED_EXPRESSION = 9;
BashParser.UNQUOTED_EXPRESSION = 10;
BashParser.VARIABLE_NAME = 11;
BashParser.WORD = 12;
BashParser.ANY = 13;

BashParser.RULE_prog = 0;
BashParser.RULE_command = 1;
BashParser.RULE_assignment = 2;
BashParser.RULE_simple_command_element = 3;
BashParser.RULE_redirection_list = 4;
BashParser.RULE_multiline_command = 5;
BashParser.RULE_multiline_command_line = 6;
BashParser.RULE_simple_command = 7;

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

	COMMAND_SEPARATOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.COMMAND_SEPARATOR);
	    } else {
	        return this.getToken(BashParser.COMMAND_SEPARATOR, i);
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

	VARIABLE_NAME() {
	    return this.getToken(BashParser.VARIABLE_NAME, 0);
	};

	EQUALS() {
	    return this.getToken(BashParser.EQUALS, 0);
	};

	WORD() {
	    return this.getToken(BashParser.WORD, 0);
	};

	WHITESPACE() {
	    return this.getToken(BashParser.WHITESPACE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof BashVisitor ) {
	        return visitor.visitAssignment(this);
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

	simple_command() {
	    return this.getTypedRuleContext(Simple_commandContext,0);
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


	LINE_CONTINUATION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BashParser.LINE_CONTINUATION);
	    } else {
	        return this.getToken(BashParser.LINE_CONTINUATION, i);
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




BashParser.ProgContext = ProgContext; 
BashParser.CommandContext = CommandContext; 
BashParser.AssignmentContext = AssignmentContext; 
BashParser.Simple_command_elementContext = Simple_command_elementContext; 
BashParser.Redirection_listContext = Redirection_listContext; 
BashParser.Multiline_commandContext = Multiline_commandContext; 
BashParser.Multiline_command_lineContext = Multiline_command_lineContext; 
BashParser.Simple_commandContext = Simple_commandContext; 
