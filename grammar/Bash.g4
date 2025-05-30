grammar Bash;

/*************************************************************************************************************************
   PARSER RULES (recognized by lowercase/mixedcase naming)
 *************************************************************************************************************************/

prog
    :   command ( COMMAND_SEPARATOR command )* TRAILING_COMMAND_SEPARATOR?
    ;

command
    :   multiline_command
    |   singleline_command
    ;

singleline_command
    :   SIMPLE_COMMAND_EXECUTABLE (WHITESPACE SIMPLE_COMMAND_ELEMENT)* (WHITESPACE REDIRECTION)*
    |   (ASSIGNMENT WHITESPACE)+ SIMPLE_COMMAND_EXECUTABLE (WHITESPACE SIMPLE_COMMAND_ELEMENT)* (WHITESPACE REDIRECTION)*
    ;

multiline_command
    :   MULTILINE_COMMAND_LINE (LINE_CONTINUATION MULTILINE_COMMAND_LINE)*
    ;

/*************************************************************************************************************************
    LEXER RULES (recognized by all-caps naming)
 *************************************************************************************************************************/

TRAILING_COMMAND_SEPARATOR
    :   COMMAND_SEPARATOR* EOF -> skip
    ;

COMMAND_SEPARATOR
    :   (WHITESPACE* ';')+ WHITESPACE*
    |   (WHITESPACE* NEWLINE)+ WHITESPACE*
    ;

SIMPLE_COMMAND_EXECUTABLE
    :   WORD
    |   DOUBLEQUOTED_EXPRESSION
    |   SINGLEQUOTED_EXPRESSION
    ;

SIMPLE_COMMAND_ELEMENT
    :   WORD
    |   DOUBLEQUOTED_EXPRESSION
    |   SINGLEQUOTED_EXPRESSION
    ;

MULTILINE_COMMAND_ASSIGNMENTS
    :   (ASSIGNMENT WHITESPACE)+ (LINE_CONTINUATION MULTILINE_COMMAND_ASSIGNMENTS?)?
    ;

MULTILINE_COMMAND_LINE
    :   MULTILINE_COMMAND_ASSIGNMENTS? SIMPLE_COMMAND_ELEMENT (WHITESPACE SIMPLE_COMMAND_ELEMENT)* LINE_CONTINUATION MULTILINE_COMMAND_LINE
    ;

TRAILING_WHITESPACE
    :   ( ' ' | '\t' )+ ( COMMAND_SEPARATOR | EOF ) -> skip
    ;

WHITESPACE
    :   ( ' ' | '\t' )+
    ;

EQUALS
    :   '='
    ;

REDIRECTION
    :   '>' WORD
    |   '<' WORD
    |   NUMBER '>' WORD
    |   NUMBER '<' WORD
    |   '>>' WORD
    |   NUMBER '>>' WORD
    |   '<<' WORD
    |   NUMBER '<<' WORD
    |   '<&' NUMBER
    |   NUMBER '<&' NUMBER
    |   '>&' NUMBER
    |   NUMBER '>&' NUMBER
    |   '<&' WORD
    |   NUMBER '<&' WORD
    |   '>&' WORD
    |   NUMBER '>&' WORD
    |   '<<<' WORD
    |   '<<-' WORD
    |   NUMBER '<<-' WORD
    |   '>&' '-'
    |   NUMBER '>&' '-'
    |   '<&' '-'
    |   NUMBER '<&' '-'
    |   '&>' WORD
    |   NUMBER '<>' WORD
    |   '<>' WORD
    |   '>|' WORD
    |   NUMBER '>|' WORD
    ;

fragment NUMBER
    : DIGIT+ ('.' DIGIT+)?
    ;

fragment LETTER
    :   [a-zA-Z]
    ;

fragment ALPHA
    :   ( LETTER | '.' | '_' | '-' )+
    ;

fragment DIGIT
    :   [0-9]
    ;

fragment ALPHANUMERIC
    :   ( ALPHA | DIGIT )
    ;

LINE_CONTINUATION
    :   '\\' WHITESPACE? NEWLINE WHITESPACE? -> skip
    ;

NEWLINE
    : ('\r'? '\n' | '\r')+ -> skip
    ;

QUOTED_EXPRESSION
    :   SINGLEQUOTED_EXPRESSION
    |   DOUBLEQUOTED_EXPRESSION
    |   SLANTQUOTED_EXPRESSION
    ;

SLANTQUOTED_EXPRESSION
    :   '`' ( '\\"' | ~'"' )* '`'
    ;

DOUBLEQUOTED_EXPRESSION
    :   '"' ( '\\"' | ~'"' )* '"'
    ;

SINGLEQUOTED_EXPRESSION
    :   '\'' ( '\\\'' | ~'\'' )* '\''
    ;

// echo \"hello world\"
fragment FILE_PATH
    :   FILE_PATH_UNIX
    |   FILE_PATH_WINDOWS
    ;

/**
 * Absolute path (e.g. "/foo/bar")
 * Relative path within the current directory (e.g. "foo/bar")
 * Relative path starting from the current directory (e.g. "../foo/bar")
 */
fragment FILE_PATH_UNIX
    :   FILE_PATH_ELEMENT ('/' FILE_PATH_ELEMENT)*
    |   '.' '/' FILE_PATH_ELEMENT ('/' FILE_PATH_ELEMENT)*
    |   '/' FILE_PATH_ELEMENT ('/' FILE_PATH_ELEMENT)*
    ;

/**
 * - Absolute path from the root of a named drive (e.g. "C:\Foo\Bar")
 * - Relative path from the root of current drive (e.g. "\Program Files\Foo.exe")
 * - Relative path to a subdirectory of the current directory (e.g. "2018\January.xlsx")
 * - Relative path starting from the current directory (e.g. "..\Utils\Bar.cmd")
 * - Relative path from the current directory of the C: drive (e.g. "C:Projects\API\api.sln")
 */
fragment FILE_PATH_WINDOWS
    :   [a-zA-Z] ':' ( '\\' FILE_PATH_ELEMENT )* '\\'?
    |   [a-zA-Z] ':' FILE_PATH_ELEMENT ( '\\' FILE_PATH_ELEMENT )* '\\'?
    |   ( '\\' FILE_PATH_ELEMENT )+ '\\'?
    |   FILE_PATH_ELEMENT ( '\\' FILE_PATH_ELEMENT )* '\\'?
    ;

/**
 * File paths can be:
 * - file/directory name (e.g. "foo-bar.txt" or "foo-v2.txt")
 * - relation (i.e. ".." in "../foo/bar" or "." in "./foo/bar")
 */
fragment FILE_PATH_ELEMENT
    :   ( ALPHA | DIGIT | '_' | '-' | '.' | '~' )+
    |   ( '..' | '.' )
    ;

UNQUOTED_EXPRESSION
    :   ( ALPHA | DIGIT | '_' | '-' | '.' | '~' )+
    |   '$' (LETTER | '_') (ALPHANUMERIC | '_')*
    |   FILE_PATH
    ;

ASSIGNMENT
    :   [a-zA-Z_][a-zA-Z0-9_]* '=' ( ~[ \t\r\n'"`] | QUOTED_EXPRESSION )+
    ;

VARIABLE_NAME
    :   [a-zA-Z_][a-zA-Z0-9_]*
    ;

WORD
    :   ( ALPHA | DIGIT | '_' | '-' | '.' | '~' )+
    |   '$' (LETTER | '_') (ALPHANUMERIC | '_')*
    |   '$' '{' (LETTER | '_') (ALPHANUMERIC | '_')* '}'
    |   FILE_PATH
    ;

VARIABLE_VALUE
    :   WORD
    |   QUOTED_EXPRESSION
    ;

COMMENT
    : '#' ~[\r\n]* -> skip
    ;

ANY: . ;  // recommended in https://tomassetti.me/best-practices-for-antlr-parsers/