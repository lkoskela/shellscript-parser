import CommonTokenStream from 'antlr4/CommonTokenStream.js';

import BashLexer from '../codegen/grammar/BashLexer.js';


const stringifyCircularJSON = (obj: any): string => {
    const seen = new WeakSet();
    return JSON.stringify(obj, (k, v) => {
        if (v !== null && typeof v === 'object') {
            if (seen.has(v)) return;
            seen.add(v);
        }
        return v;
    }, 2);
};

const printTokenStream = (stream: CommonTokenStream, lexer: BashLexer): string[] => {
    let result: string[] = [];
    let tokenNames = lexer.getSymbolicNames().filter(x => x !== null) as string[]
    let longestName = tokenNames.reduce((prev: string, curr: string): string => {
        if (prev && prev.length > curr.length) return prev
        return curr
    })

    //console.log(`\nlexer token names:`);
    //tokenNames.forEach((name, index) => console.log(`  ${index}\t${name}`))
    console.log(`\ntoken stream:`);
    for (let i=0; stream.sync(i); i++) {
        let token = stream.get(i);
        let text = token.text
        let type = token.type === BashLexer.EOF ? 'EOF' : tokenNames[token.type] || token.type
        let paddedType = `${type}:`.padEnd(longestName.length + 3, ' ')
        console.log(`  ${paddedType}  ${stringifyCircularJSON(text)}`)
        result.push(`${paddedType}  ${stringifyCircularJSON(text)}`)
    }
    return result
}

export default printTokenStream;
