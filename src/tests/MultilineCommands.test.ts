import { describe, expect, it, TestContext } from 'vitest'

import parse from '../ShellParser.js'

const p = (input: string): string[] => parse(input).commands

describe('multi-line commands', () => {

    it('with two lines', () => {
        expect(p('echo \\ \nhello world')).toStrictEqual(['echo hello world'])
    })

    it('with three or more lines', () => {
        expect(p('echo \\ \nhello \\ \n world')).toStrictEqual(['echo hello world'])
    })

    it('ignores trailing empty line', () => {
        expect(p('echo \\ \nhello \\ \n world \\ \n')).toStrictEqual(['echo hello world'])
    })
})
