class CoffeeMachine {
    makeCoffee() {
        console.log('making coffee....');
    }
}

class SpecialCoffeeMachine extends CoffeeMachine {
    makeCoffee(cb) {
        console.log('making coffee and do something...');
        cb();
    }
}

const coffeeMachine = new SpecialCoffeeMachine();
coffeeMachine.makeCoffee(function(){
    console.log('Call the boss');
}); 