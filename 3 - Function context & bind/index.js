var mouse = {
    name: 'Mickey',
    sayHi: function() {
        console.log('Hi, my name is', this.name);
    }
};

var cat = {
    name: 'Tom'
};

mouse.sayHi(); //context is function context = 'Mickey'

var say = mouse.sayHi; //Say is a function

say(); //context is global context = undefined, because global context do not have a attribute name

say = mouse.sayHi.bind(cat) //Input object mouse to function -> when call function is point to object mouse and mouse have attribute name = "Mickey"

say();


// VD2

run = (cb) => {
    console.log('run....');
    cb();
}

run(mouse.sayHi.bind(mouse)); 