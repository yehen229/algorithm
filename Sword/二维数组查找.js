var findNumberIn2DArray = function(matrix, target) {
    for(let i = matrix.length-1,j = 0;i>0,j<matrix[0].length;){
        if(target == matrix[i][j]) {
            return true;
        }
        if(target < matrix[i][j]) {
            i--;
        } else if (target > matrix[i][j]) {
            j++;
        }
    }
    return false;
};

let a = findNumberIn2DArray([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 22);

console.log(a);

