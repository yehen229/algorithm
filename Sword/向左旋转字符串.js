/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
    // let temp = [];
    // temp = s.split("");
    // while(n > 0){
    //     temp.push(temp.shift())
    //     n--;
    // }
    // return temp.join("");
    return s.substring(n) + s.substring(0,n)
};