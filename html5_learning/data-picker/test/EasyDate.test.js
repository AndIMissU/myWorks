import should from 'should';
import EasyDate from '../src/EasyDate';

describe('EasyDate 运算', () => {
    let date = new EasyDate('+1m');
    
    it('offset日期应该正确', () => {
        let today = new Date();
        let some = date.toDate();
        if(today.getMonth() == 11){
            should(some.getMonth()).equal(0);
        } else {
            should(some.getMonth() - today.getMonth()).equal(1);
        }
    });
});