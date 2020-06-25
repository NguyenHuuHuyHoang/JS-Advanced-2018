function greeting(name, age) {
    console.log(`'Hi!' ${name}. I am ${age}`);
}

greeting.call(null, 'Tom', 18);


function greeting2() {
    console.log(`'Hi!' ${this.name}. I am ${this.age}`);
}

greeting2.call({
    name: 'Cat',
    age: 20
});