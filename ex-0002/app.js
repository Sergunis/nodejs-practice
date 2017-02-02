/**
 * Created by serg on 02.02.17.
 */

let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter the number> '
});

rl.prompt();

rl
    .on('line', (line) => {
        "use strict";

        let number = line.trim();

        number = validate(number);

        if (!isNaN(number)) {
            let sum = calculate(number);

            console.log(`The sum of all integer number from 1 to ${number} is equal:`);
            console.log(sum);

            rl.prompt();
        }
    })
    .on('close', () => {
        "use strict";
        console.log('Have a great day');
        process.exit(0);
    });


function validate(number) {
    number = parseInt(number);

    if (isNaN(number) || number < 0 || number > 1e4) {
        console.log('Incorrect number. Enter an integer number from 1 to 1e4. For example ' + Math.ceil(Math.random() * 1e4));
        rl.prompt();
        return NaN;
    }

    return number;
}

function calculate(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    return sum;
}
