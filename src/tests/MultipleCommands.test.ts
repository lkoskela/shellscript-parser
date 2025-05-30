import { describe, expect, it } from "vitest";

import parse from "../ShellParser.js";

const p = (input: string): string[] => parse(input).commands;

describe("multiple commands", () => {
    describe('separated by ";"', () => {
        it("without extra whitespace", () => {
            expect(p("pwd;whoami")).toStrictEqual(["pwd", "whoami"]);
            expect(p("pwd;;;;;whoami")).toStrictEqual(["pwd", "whoami"]);
            expect(p("foo -a1;bar --arg2")).toStrictEqual(["foo -a1", "bar --arg2"]);
            expect(p("bar --silent;;;;;foo -d")).toStrictEqual(["bar --silent", "foo -d"]);
        });

        it("with extra whitespace", () => {
            expect(p("pwd ; whoami")).toStrictEqual(["pwd", "whoami"]);
            expect(p("cd foo \t;\t  rm -r")).toStrictEqual(["cd foo", "rm -r"]);
            expect(p("foo -a -b ; bar --silent")).toStrictEqual(["foo -a -b", "bar --silent"]);
            expect(p('foo abc def \t;\t  bar "9"')).toStrictEqual(["foo abc def", 'bar "9"']);
        });
    });

    it('separated by "\\n" or "\\r\\n"', () => {
        expect(parse("cmd1\ncmd2")).toStrictEqual({ commands: ["cmd1", "cmd2"] });
        expect(p("cmd1\ncmd2")).toStrictEqual(["cmd1", "cmd2"]);
        expect(p("cmd3\n\n\ncmd4")).toStrictEqual(["cmd3", "cmd4"]);
        expect(p("cmd5\r\ncmd6")).toStrictEqual(["cmd5", "cmd6"]);
        expect(p("cmd7 \n cmd8")).toStrictEqual(["cmd7", "cmd8"]);
        expect(p("cmd9 \t\n\t  cmd10")).toStrictEqual(["cmd9", "cmd10"]);
    });
});
