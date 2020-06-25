const a = [1,2,3];
const b = [0, ...a,4];
console.log(b);

function sum(... numbers) {
 return numbers.reduce((a,b) => a+b);
}

console.log(sum(...a)); //sum(1, 2, 3)