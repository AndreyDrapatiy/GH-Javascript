var arr0 = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; // 17
var arr1 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
var arr2 = [7, 0, 1, 3, 4, 1, 2, 1]; // 9
var arr3 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
var arr4 = [2, 2, 1, 2, 2, 3, 0, 1, 2];// 4
var arr5 = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8];// 24
var arr6 = [2, 2, 2, 2, 2];//0
var arr7 = [2, 3, 2, 3, 2];//0




function  findWater(mountainsArr) {

    var left = [0];
    var leftMax = 0;
    var right = mountainsArr.length - 1;
    var rightMax = 0;
    var waterSum = 0;



    while(left < right) {
        if(mountainsArr[left] > leftMax) {
            leftMax = mountainsArr[left];
        }
        if(mountainsArr[right] > rightMax) {
            rightMax = mountainsArr[right];
        }
        if(leftMax >= rightMax) {
            waterSum = waterSum += rightMax - mountainsArr[right];
            right--;
        } else {
            waterSum = waterSum += leftMax - mountainsArr[left];
            left++;
        }
    }
    return waterSum;
}

console.log(findWater(arr0));
console.log(findWater(arr1));
console.log(findWater(arr2));
console.log(findWater(arr3));
console.log(findWater(arr4));
console.log(findWater(arr5));
console.log(findWater(arr6));
console.log(findWater(arr7));

