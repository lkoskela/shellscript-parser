import { describe, expect, it, TestContext } from 'vitest'

import parse from '../ShellParser.js'

const p = (input: string): string[] => parse(input).commands

describe('simple commands', () => {
    const parseTestNameAsInput = (t: TestContext) => {
        expect(p(t.task.name)).toStrictEqual([t.task.name])
    }

    it('echo', parseTestNameAsInput)
    it('/usr/bin/whoami', parseTestNameAsInput)
    it('scripts/build.sh', parseTestNameAsInput)
    it('"\\Program Files\\build.cmd"', parseTestNameAsInput)

    describe('empty command', () => {
        it('renders an empty list of commands', () => {
            expect(p('')).toStrictEqual([])
            expect(p(' ')).toStrictEqual([])
            expect(p('\t')).toStrictEqual([])
            expect(p('\n')).toStrictEqual([])
            expect(p(';')).toStrictEqual([])
            expect(p('   ;;')).toStrictEqual([])
        })
    })
})
