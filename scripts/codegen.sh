#!/bin/sh
#cd -- "$1"

GRAMMAR="$1"
OUTPUT_DIR="$2"
mkdir -p "$OUTPUT_DIR"
CODEGEN_OUTPUT="${OUTPUT_DIR}/${GRAMMAR/.g4/Parser.js}"

if [ ! -f "$CODEGEN_OUTPUT" ] || [ "$GRAMMAR" -nt "$CODEGEN_OUTPUT" ]; then
    echo "Grammar is newer than generated code - (re)generating parser implementation into ${OUTPUT_DIR}."
    antlr4 -Dlanguage=JavaScript -visitor -no-listener -long-messages -o "$OUTPUT_DIR" "$GRAMMAR"
fi
