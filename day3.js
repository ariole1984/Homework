// LAB 1
// Write a function named assignGrade that takes one argument, 
// a number score. Returns a grade for the score, either 
// “A,” “B,” “C,” “D,” or “F.” Call that function for a few 
// different scores and log the result to ensure it works.


// function assignGrade(score) {
//     if (score > 90) {
//         return 'A';
//     } else if (score > 80) {
//         return 'B';
//     } else if (score > 70) {
//         return 'C';
//     } else if (score > 65) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// }
//      console.log('You got a ' + assignGrade(90));
//    console.log('You got a ' + assignGrade(65));


// LAB 2
// Create a function that returns the number of true values in an array.
// const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]

const arr1 = [true, false, false, true, false, false, false, true, true, true, false];
const count1 = arr1.filter(value => value === true).length;
console.log(count1); 


// LAB 3
// Create a function that converts a string to all uppercase letters and console.log the result (hint: string methods):
// let str = “WHAT a TIME to BE ALIVE!”

// function toLowerCase = “WHAT a TIME to BE ALIVE!”;
// console.log(toLowerCase);

// LAB 4
// Create a function that takes in a number of two-pointers and three-pointers made and returns a basketball 
// team’s total score?


function points (two_point, three_point){
    return two_point*2 + three_point*3;
    
}

console.log(points(2,5))