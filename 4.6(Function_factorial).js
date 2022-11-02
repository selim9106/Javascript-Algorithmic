// Create a function factorial(a) that returns the factorial of a number.
// That function must be recursive.
// // If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

function factorial(n) {
    if (n<0) {
        return -1
    } else if (n==0) {
        return 1
    } else {
        return n*factorial(n-1)
    }
}

console.log(factorial(5));

// // 3 ways to create a factoralize function:
// // https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/#:~:text=function%20factorialize(num)%20%7B%20%2F%2F%20If%20num%20%3D%200%20OR,num%20*%3D%20i%3B%20%2F*%20num