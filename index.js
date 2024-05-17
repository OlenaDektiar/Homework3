function fizzBuzz (number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log('fizzBuzz');
    } else if (number % 3 === 0) {
        console.log('fizz');
    } else if (number % 5 === 0) {
        console.log('buzz');
    } else (number)
    console.log(number);
}

//a leap year
function isLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log('leap')
    } else {
        console.log('notALeap');
    }
}

// age
function Age(years) {
    let age;
    if (years === 1) {
        age = 'рік';
    } else if (years >= 2 && years <= 4) {
        age = 'роки';
    } else {
        age = 'років';
    }
    console.log(`Вам ${years} ${age}`);
}