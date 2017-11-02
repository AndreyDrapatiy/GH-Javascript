var arr = [1, 3, 6, 3 ,8 ,3];


Array.prototype.myForEach = function (myForEach) {
    for (var i = 0; i < this.length; i++){
        myForEach(this[i], i, this);
    }
};

arr.myForEach(function (current, i, arr) {
        console.log(i + ": " + current );
});


Array.prototype.myMap = function (myMap) {
    var newArr = [];
    for (var i = 0; i < this.length; i++) {
        newArr[i] = myMap(this[i], i, this);
    }
    return newArr;
};


console.log(arr.myMap(function (current) {
    return current *= current;
}));



// https://ru.wikibooks.org/wiki/Реализации_алгоритмов/Сортировка/Вставками/#Javascript
// Array.prototype.mySort = function() {
//
//     for(i = 1; i < this.length; i++) {
//         x = this[i];
//         for(j = i-1; j >= 0 && this[j] > x; j--)
//         {
//             this[j+1] = this[j];
//         }
//         this[j+1] = x;
//     }
//     return this;
// };
//
// console.log(arr.mySort());
//


//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//https://github.com/kikill95/geekhub-s7-examples/blob/master/sort.js

Array.prototype.mySort = function (compareFunction) {
    compareFunction = compareFunction || function (a, b) {
        if (a === b) {
            return 0
        } else if (a > b) {
            return 1
        } else {
            return -1
        }
    };

    var x;
    for (var i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) === 1 && i >= 0) {
            x = this[i];
            this[i] = this[i + 1];
            this[i + 1] = x;
            i -= 2
        }
    }

    return this
};


console.log(arr.mySort());


