// const names = ['Thanh', 'Trang', 'Thủy'];
// for (let i = 0; i < names.length; i++){
//     console.log(name[i]);
// }


// const obj = {  //Array-like object là một object có thuộc tính length và các thuộc tính giống như array, các index là các key của object
//     0: 'Thanh',
//     1: 'Trang',
//     2: 'Thủy',
//     length:3
// }

// for (let i = 0; i < obj.length; i++) {
//     console.log(obj[i]);
// }

// function sum() {
//     let result = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }
//     return result;
// }

function sum() {
    const numbers = Array.from(arguments);
    return numbers.reduce(function(sum, num){
        return sum + num;
    },0);
}


sum(1,2,3,4,5,3);