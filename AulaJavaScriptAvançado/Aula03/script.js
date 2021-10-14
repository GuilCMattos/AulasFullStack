

let dobro =  () => 2*this.x


// let dobro = function(x) { 
//     return (2*x)
// }

let numero = { 
    x: 8,
    d: dobro
}


console.log(numero.d())