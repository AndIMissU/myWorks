// webpack最本质的就是 根据omport的顺序将js文件组织起来的算法
import DatePicker from './DatePicker';
import RangeDatePicker from './RangeDatePicker';

// 有些类 是抽象的 提供生产类的功能 满足多情况使用的需求
export default {
    createDatePicker (el, options) {
        if ('scattered' in options) {
            return new DatePicker(el, options);
        } else {
            return new RangeDatePicker(el, options);
        }
    }
}