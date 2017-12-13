// assertion 断言
const expect = require('chai').expect;
const {add} = require('../index');


describe('两数相加', () => {
    // 举例子 测试用例
    it('两个参数相加应该返回和', () => {
        expect(add(0,1)).to.equal(1);
        expect(add(1,1)).to.equal(2);
        expect(add(3,6)).to.equal(9);
    });

    it('如果传入非数值类型返回NaN', () => {
        expect(isNaN(add(0, null))).to.equal(true);
        expect(isNaN(add(null, undefined))).to,equal(true);
        expect(isNaN(add('0', {}))).to.equal(true);
    })

})