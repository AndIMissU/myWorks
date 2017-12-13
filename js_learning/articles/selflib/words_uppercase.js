const name = "aaa bbb ccc";
// \s 空白符 \b 单词的开头 \w 表示可以匹配到a-z A-Z 0-9的字符  /g表示全部
// \b\w+\b 表示匹配到一个单词
const str2 = name.replace(/\b\w+\b/g, function(word) {
    console.log(word);
    return word.substring(0,1).toUpperCase() + word.substring(0);
});
console.log(str2);
// 将此字符串里的每一个单词首字母变大写 结果为Aaa Bbb Ccc
// 分成数组 split
// Amy.trim(str,2);
// map toUpperCase() .join(' ')

// const amy = (function() {
//     let _name = 'aaa bbb ccc';

//     return {
//       toUpperCase: function() {
//         return _name.replace(/\b\w+\b/g,function(word){
//             return word.substring(0,1).toUpperCase() + word.substring(1);
//         });
//       }
//     }
   
// })();

// console.log(amy.toUpperCase());
