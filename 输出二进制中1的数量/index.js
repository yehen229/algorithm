/*
    输入：n=2
    输出：[0,1,1]
    解释：
        0 -- 0
        1 -- 1
        2 -- 10
*/

var twoCount = function (n) {
    let array = [];
    while (n >= 0) {
        array[n] = n;
        n--;
    }
    return array.map(item => {
        return item = item.toString(2).split(1).length - 1
    })
    
}

console.log(twoCount(15))

