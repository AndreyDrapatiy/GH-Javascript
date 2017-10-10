var arr0 = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
var arr1 = [-1,-12,-2];
var arr2 = [1,7,3];
var arr3 = [1,undefined,3,5,-3];
var arr4 = [1,NaN,3,5,-3, 'aaa'];
var arr5 = [1, -4, NaN, 43, undefined, '2', 'djfl'];

function getMinMaxSum (argarr) {
    var sum = null;
    var min = argarr[0];
    var max = argarr[0];

    for (i = 0; i < argarr.length; i++){

        if(!isNaN(argarr[i]) && typeof(argarr[i]) === 'number'){
            sum = sum += argarr[i];
        }
        if (argarr[i] < min){
            min = argarr[i];
        }
        if (argarr[i] > max ){
            max = argarr[i];
        }
    }
    return{
        "Sum =" : sum,
        "Min =" : min,
        "Max =" : max
    }
}

console.log(getMinMaxSum(arr0));
console.log(getMinMaxSum(arr1));
console.log(getMinMaxSum(arr2));
console.log(getMinMaxSum(arr3));
console.log(getMinMaxSum(arr4));
console.log(getMinMaxSum(arr5));



