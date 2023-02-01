import { describe, expect, it, TestContext } from 'vitest'

import parse from '../ShellParser.js'

const p = (input: string): string[] => parse(input).commands

describe('multiple commands', () => {

    describe('separated by ";"', () => {
        it('without extra whitespace', () => {
            expect(p('pwd;whoami')).toStrictEqual(['pwd', 'whoami'])
            expect(p('pwd;;;;;whoami')).toStrictEqual(['pwd', 'whoami'])
            expect(p('foo -a1;bar --arg2')).toStrictEqual(['foo -a1', 'bar --arg2'])
            expect(p('bar --silent;;;;;foo -d')).toStrictEqual(['bar --silent', 'foo -d'])
        })

        it('with extra whitespace', () => {
            expect(p('pwd ; whoami')).toStrictEqual(['pwd', 'whoami'])
            expect(p('pwd \t;\t  whoami')).toStrictEqual(['pwd', 'whoami'])
            expect(p('foo -a -b ; bar --silent')).toStrictEqual(['foo -a -b', 'bar --silent'])
            expect(p('foo abc def \t;\t  bar "9"')).toStrictEqual(['foo abc def', 'bar "9"'])
        })
    })

    it('separated by "\\n"', () => {
        expect(p('pwd\nwhoami')).toStrictEqual(['pwd', 'whoami'])
        expect(p('pwd\n\n\nwhoami')).toStrictEqual(['pwd', 'whoami'])
        expect(p('pwd\r\nwhoami')).toStrictEqual(['pwd', 'whoami'])
        expect(p('pwd \n whoami')).toStrictEqual(['pwd', 'whoami'])
        expect(p('pwd \t\n\t  whoami')).toStrictEqual(['pwd', 'whoami'])
    })
})
