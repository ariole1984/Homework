/*
Create a function that takes a base number and an exponent number and returns the calculation.

Examples
calculateExponent(5, 5) ➞ 3125

calculateExponent(10, 10) ➞ 10000000000

calculateExponent(3, 3) ➞ 27
*/


function calculateExponent(num, exp) {
	let newnum = 1;
	for(let o=0; o<exp; o++){
		newnum = newnum*num;
	}
return newnum;	
};

console.log(calculateExponent(2, 2));
console.log(calculateExponent(2, 4));
console.log(calculateExponent(2, 5));