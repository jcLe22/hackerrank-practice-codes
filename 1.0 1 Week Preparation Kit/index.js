// Plus Minus Problem

function plusMinus(arr) {

    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i=0; i < arr.length; i++) {

        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }

    const pos = (positive/arr.length).toFixed(6);
    const neg = (negative/arr.length).toFixed(6);
    const zer = (zero/arr.length).toFixed(6);

    console.log(pos + "\n" + neg + "\n" + zer);
}

// Mini-Max Sum

function miniMaxSum(arr) {

    let newArr = [...arr].sort();
    let sum = 0;

    for (let i=0; i < arr.length; i++) {
        sum += newArr[i];
    };

    const max = sum - newArr[i];
    const min = sum - newArr[arr.length - 1];

    console.log(min, max);
}

// Time Conversion

let s = "07:05:45PM";

function timeConversion(s) {

    let militaryTime = '';
    let amPm = s.charAt(8);   
    let hour = s.slice(0,2);

    if (amPm == 'A') {

        if( hour == '12') {
            hour = '00';
        } else {
            hour = s.slice(0,2);
        }


    } else {

        if( hour == '12') {

            hour = s.slice(0,2);
        } else {
            hour = parseInt(s.slice(0,2), 10) + 12;
        }
    }

    return militaryTime = hour + s.slice(2,8);

};

// Practice Mock Test

function fizzBuzz(n) {

    if ( n%3 == 0 && n%5 == 0) {
        console.log("FizzBuzz");
    } else if ( n%3 == 0 && n%5 != 0) {
        console.log("Fizz");
    } else if ( n%3 != 0 && n%5 == 0) {
        console.log("Buzz");
    } else {
        console.log(n);
    }

};

// Day 1 Mock Test

function findMedian(arr) {

    arr.sort();

    return arr[Math.floor(arr.length/2)];

}

// Lonely Integer

function lonelyInteger(a) {

    a.sort((a, b) => a - b);

    for (let i=0; i < a.length; i++) {

        if (a[i] != a[i+1] && a[i] != a[i-1]) {
            return a[i];
        }
    };
}

// Diagonal Difference

function diagonalDifference(arr) {

    let leftToRight = 0;
    let rightToLeft = 0;

    for (let i=0; i < arr.length; i++) {
        leftToRight += arr[i][i];
        rightToLeft += arr[i][arr.length - 1 - i];
    }

    return Math.abs(leftToRight - rightToLeft);
    
}