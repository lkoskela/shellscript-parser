import { describe, expect, it } from "vitest";

import parse from "../ShellParser.js";

const p = (input: string): string[] => parse(input).commands;

describe("multi-line commands", () => {
    it("with two lines", () => {
        expect(p("echo \\ \nhello world")).toStrictEqual(["echo hello world"]);
    });

    it("with three or more lines", () => {
        expect(p("echo \\ \nguten \\ \n tag")).toStrictEqual(["echo guten tag"]);
        expect(p("echo \\ \n'guten' \\ \n 'tag'")).toStrictEqual(["echo 'guten' 'tag'"]);
    });

    it("ignores trailing empty line", () => {
        expect(p("echo \\ \nbonjour \\ \n monsieur \\ \n")).toStrictEqual(["echo bonjour monsieur"]);
        expect(p("echo \\ \n'bonjour' \\ \n 'monsieur' \\ \n")).toStrictEqual(["echo 'bonjour' 'monsieur'"]);
    });
});
