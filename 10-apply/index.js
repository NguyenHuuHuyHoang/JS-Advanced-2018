// apply
// call: func.call (this, param1, param2,....);
// apply: func.apply(this, [param1, param2,....]);
// function greeting() {
//     console.log(`Hi ${this.name}. I am ${this.age}.`);
// }

// const cat = {
//     name: 'Tom',
//     age: '100'
// };

// greeting.call(cat);

function sum() {
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, num) => sum + num, 0);
}

function average() {
    //sum
    const x = sum.apply(null,arguments); //Tên biên không nên trùng với tên hàm
    //sum / arguments.length;
    return x / arguments.length;
}

console.log(average(1,2,3,4,5));