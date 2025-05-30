#!/bin/bash
#cd -- "$1"

GRAMMAR="$1"
OUTPUT_DIR="$2"
PARSER_OUTPUT_FILE="${GRAMMAR/.g4/Parser.ts}"
PARSER_OUTPUT_FILE="${PARSER_OUTPUT_FILE/\.\//}"
echo "PARSER_OUTPUT_FILE=$PARSER_OUTPUT_FILE"

if [ "$1" == "" ] || [ "$2" == "" ]; then
    echo "Usage: $0 <grammar_file> <output_dir>"
    exit 1
fi

mkdir -p "$OUTPUT_DIR"
CODEGEN_OUTPUT="${OUTPUT_DIR}/${PARSER_OUTPUT_FILE}"

if [ ! -f "$CODEGEN_OUTPUT" ] || [ "$GRAMMAR" -nt "$CODEGEN_OUTPUT" ]; then
    echo "Grammar is newer than generated code - (re)generating parser implementation into ${OUTPUT_DIR}."
    npx antlr-ng -Dlanguage=TypeScript -l -v -o "$OUTPUT_DIR" "$GRAMMAR"
fi
