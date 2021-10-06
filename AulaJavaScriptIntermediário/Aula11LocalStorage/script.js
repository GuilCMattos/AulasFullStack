/* let a = {nome: "Guilherme", n1: 7.3} 

localStorage.setItem("aluno", JSON.stringify(a)) */

let a = localStorage.getItem("aluno")
console.log(JSON.parse(a))


















// localStorage.setItem("nome", "igor")

// let n = localStorage.getItem("nome")
// console.log(n)

// localStorage.removeItem("nome")

// Persistência de Dados

/* onload = function(){ 

    let nome = localStorage.getItem("nome")
    let h1 = document.getElementById("nome")
    h1.innerHTML = nome;

}

function atualizar(e) { 
    let valor = e.value;
    console.log(valor)

    let h1 = document.getElementById("nome")
    h1.innerHTML = valor;

    localStorage.setItem("nome", valor)
} */