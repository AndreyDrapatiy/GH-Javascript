// isPrime - Returns true or false, indicating whether the given number is prime.
function isPrime(n){
    for (var i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return n > 1
}

console.log("isPrime:");
console.log(isPrime(0));                                   // false
console.log(isPrime(1));                                  // false
console.log(isPrime(17));                                // true
console.log(isPrime(10000000000000));                   // false

// factorial - Returns a number that is the factorial of the given number.

function factorial(n){
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

console.log("factorial:");
console.log(factorial(0));                          //1
console.log(factorial(1));                         //1
console.log(factorial(6));                        //720


// fib - Returns the nth Fibonacci number.

function fib(n){
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log("Fib:");
console.log(fib(0));                              // 0
console.log(fib(1));                              // 1
console.log(fib(10));                             // 55
console.log(fib(20));                             // 6765

// isSorted - Returns true or false, indicating whether the given array of numbers is sorted.
function isSorted(arr){
    var len = arr.length - 1;
    for (var i = 0; i < len; ++i) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log("isSorted:");
console.log(isSorted([]));                        // true
console.log(isSorted([-Infinity, -5, 0, 3, 9])); // true
console.log(isSorted([3, 9, -3, 10]));            // false

// reverse - Reverses the given string (yes, using the built in reverse function is cheating).
function reverse(str){
    var arr = str.split('');
    var newStr = '';
    if (!str || typeof str !== 'string' || str.length < 2) {
        return str;
    }

    for (var i = arr.length - 1; i >= 0; i--) {
        newStr += arr[i];
    }
    return newStr;
}

console.log("Reverse:");
console.log(reverse(''));                           // ' '
console.log(reverse('abcdef'));                    // 'fedcba'


//indexOf - Implement the indexOf function for arrays.
function indexOf(arr, num){
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i
        }
    }
    return -1
}

console.log("IndexOf:");
console.log(indexOf([1, 2, 3], 1));               // 0
console.log(indexOf([1, 2, 3], 4));               // -1

// isPalindrome - Return true or false indicating whether the given string is a plaindrone (case and space insensitive).
function isPalindrome(str){
    str = str.replace(/[^a-zA-Z]/g, '')
    return str.split('').reverse().join('').toUpperCase() === str.toUpperCase()
}

console.log("Palindrom:");
console.log(isPalindrome(''));                                // true
console.log(isPalindrome('abcdcba'));                         // true
console.log(isPalindrome('abcd'));                            // false
console.log(isPalindrome('A man a plan a canal Panama'));     // true


const isBalanced = (string) => {
    let open = [];

    const openBrackets = new Set(['(', '[', '{']);

    const bracketCorrespondence = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let c of string){
        if (openBrackets.has(c)) {
            open.push(c);
        } else if (bracketCorrespondence[c] && open.pop() !== bracketCorrespondence[c]) {
            return false;
        }
    }

    return !open.length;
}
console.log("isBalanced");
console.log(isBalanced('}{'));


console.log(isBalanced('{{}'));                     // false
console.log(isBalanced('{}{}'));                    // false
console.log(isBalanced('foo { bar { baz } boo }')); // true
console.log(isBalanced('foo { bar { baz }'));       // false
console.log(isBalanced('foo { bar } }'));           // false


function missing(array){
    var missing;
    var sort = array.sort(function (a, b){
        return a - b;
    });
    var max = Math.max.apply(null, array);

    for (var i = 1; i < max; i++) {
        if (sort.indexOf(i) === -1) {
            return missing = i
        }
    }
    return missing
}

console.log(missing([]));             //undefined
console.log(missing([1, 4, 3]));      //2
console.log(missing([2, 3, 4]));      //1
console.log(missing([5, 1, 4, 2]));   //3
console.log(missing([1, 2, 3, 4]));   //undefined