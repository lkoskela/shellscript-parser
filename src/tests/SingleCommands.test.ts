import { describe, expect, it, TestContext } from 'vitest'

import parse from '../ShellParser.js'

const p = (input: string): string[] => parse(input).commands

describe('single commands', () => {
    const parseTestNameAsInput = (t: TestContext) => {
        expect(p(t.task.name)).toStrictEqual([t.task.name])
    }

    describe('with arguments', () => {
        it('ls -l', parseTestNameAsInput)
        it('cmd -s --long', parseTestNameAsInput)
        it('echo "hello world"', parseTestNameAsInput)
        it('echo \'hello world\'', parseTestNameAsInput)
        it('echo "hello $USER"', parseTestNameAsInput)
        it('echo "hello ${USER}"', parseTestNameAsInput)
        it('echo "hello $(whoami)"', parseTestNameAsInput)
    })

    describe('with assignments', () => {
        it('VAR=123 /bin/foo', parseTestNameAsInput)
        it('VAR=123 FOO="BAR" /bin/foo', parseTestNameAsInput)
    })
})
