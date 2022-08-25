/*
    请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

 

示例 1：

输入：s = "We are happy."
输出："We%20are%20happy."

*/

// var wordChange = function (s) {
//     return s.split(' ').join('%20');
// }

var wordChange = function (s) {
    let arr = [];
    for (let i = 0, j = 0; i < s.length; i++){
        if (arr[j] == undefined) {
            arr[j] = '';
        }
        if (s.charAt(i) != ' ') {
            arr[j] += s.charAt(i);
        } else {
            arr.length += 1;
            j++;
        }
    }
    console.log(arr)
    return arr.join('%20')
}

console.log(wordChange("We are happy."))
