import { describe, expect, it } from "vitest";

import parse from "../ShellParser.js";

const p = (input: string): string[] => parse(input).commands;

describe("simple commands", () => {
    ["echo", "/usr/bin/whoami", "scripts/build.sh", '"\\Program Files\\build.cmd"'].forEach((name) => {
        it(name, () => expect(p(name)).toStrictEqual([name]));
    });

    describe("empty command", () => {
        it("renders an empty list of commands", () => {
            expect(p("")).toStrictEqual([]);
            expect(p(" ")).toStrictEqual([]);
            expect(p("\t")).toStrictEqual([]);
            expect(p("\n")).toStrictEqual([]);
            expect(p(";")).toStrictEqual([]);
            expect(p("   ;;")).toStrictEqual([]);
        });
    });
});
