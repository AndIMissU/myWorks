
const add = (a, b) => {
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b
    }
    // throw new Errow('一定要数字相加')
    // 容错性
    return NaN;
    // not a numble
}

module.exports = { add }
