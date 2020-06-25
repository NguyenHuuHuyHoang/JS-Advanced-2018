// function greeting(name) {
//     if (name === undefined) {
//         name = 'friend';
//     }

//     return `Hi, ${name}`;
// }

function greeting(name = 'friend') {
    return `Hi, ${name}`;
}

console.log(greeting('Minh'));
console.log(greeting());