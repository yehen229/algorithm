/**
 * @param {number} n
 * @return {number}
 */
 var numWays = function(n) {
    if(n == 0) {
        return 1
    }
    if(n == 1) {
        return 1
    }
    let temp = [];
    temp[0] = 1;
    temp[1] = 1;
    for(let i = 2;i <= n;i++){
        temp[i] = temp[i - 1] + temp[i - 2]
        temp[i] %= 1000000007
    }
    return temp[n]
};