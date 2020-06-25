// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         console.log('Eating....');
//     }
// }

// class Bird extends Animal {
//     fly() {
//         console.log('Flying....');
//     }
// }

// class Parrot extends Bird {
//     speak() {
//         console.log('Speaking....');
//     }
// }

// const bird = new Bird('Duck');

// const parrot = new Parrot('Neo');

// bird.fly();
// bird.eat();

// parrot.speak();
// parrot.eat();

//Khai báo bằng contructor function
function Animal(name) {
    this.name = name;

    this.eat = function () {
        console.log('Eating');
    }
}

// Animal.prototype.eat = function() {
//     console.log('Eating');
// }

function Bird(name) {
    Animal.apply(this, arguments);
}

const duck = new Bird('duck');
const cat = new Animal('tome');


duck.eat();