


let firstElement = document.getElementsByClassName('same')[0];
firstElement.style.backgroundColor = "gold";
// first option is to use for loop
for (let i = 0; i < firstElement.children.length; i++) {
    firstElement.children[i].style.color = "white";
}

// second option is to use foreach

Array.from(firstElement.children).forEach((child) => {
    child.style.color = 'white';
});


console.log(firstElement)



let thirdElement = document.getElementsByClassName('same')[1];
thirdElement.style.backgroundColor = "gold";
for (let i = 0; i < thirdElement.children.length; i++) {
    thirdElement.children[i].style.color = "white";
}

let secondElement = document.getElementById('solo');
secondElement.style.backgroundColor = "grey";
for (let i = 0; i < secondElement.children.length; i++) {
    secondElement.children[i].style.color = "black";
}







function checkPalindrome() {
    let inputElement = document.getElementById('string');
    console.log(inputElement)

    let inputString = inputElement.textContent.toLowerCase();
    inputElement.style.color = 'red';
    console.log(inputString)

    if (inputString === inputString.split('').reverse().join('')) {
        console.log(`${inputString} is a palindrome.`);
    } else {
        console.log(`${inputString} is not a palindrome.`);
    }
}
checkPalindrome();

function isPalindrome(input) {
    let a = input.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (a === a.split('').reverse().join('')) {
        console.log(`${input} is a palindrome.`);

    } else {
        console.log(`${input} is not a palindrome.`);

    }
}

// Example usage:
isPalindrome("radar"); // Should print "radar is a palindrome."
isPalindrome("hello"); // Should print "hello is not a palindrome."
isPalindrome("A man, a plan, a canal, Panama"); // Should print "A man, a plan, a canal, Panama is a palindrome."






function factorial(n) {
    if (n < 0) {
        return "number has to be positive."
    }
    else if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
const result = factorial(5);
console.log(result)
console.log(factorial(0));
console.log(factorial(8));
