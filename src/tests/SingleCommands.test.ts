import { describe, expect, it } from "vitest";

import parse from "../ShellParser.js";

const p = (input: string): string[] => parse(input).commands;

describe("single commands", () => {
    describe("with arguments", () => {
        [
            "ls -l",
            "cmd -s --long",
            'echo "hello double quotes"',
            "echo 'hello single quotes'",
            'echo "hello $NAKED_USER"',
            'echo "hello ${BRACKETED_USER}"',
            'echo "hello $(parenthesized_execution)"',
        ].forEach((name) => {
            it(name, () => expect(p(name)).toStrictEqual([name]));
        });
    });

    describe("with assignments", () => {
        ["VAR=123 /bin/foo", 'VAR=123 FOO="BAR" /bin/foo'].forEach((name) => {
            it(name, () => expect(p(name)).toStrictEqual([name]));
        });
    });
});
