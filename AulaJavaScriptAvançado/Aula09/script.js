
// function novoAluno(nome, idade) { 
//     return {nome, idade}
// }

// let alunos = [ 
//     novoAluno("Mario", 23), 
//     novoAluno("José", 45),
//     novoAluno("Marcia", 29),
//     novoAluno("João", 35)

// ]

// function alunoDaqui5Anos(aluno) { 
//     let novoAluno = aluno
//     novoAluno.idade += 5
//     return novoAluno
// }

// console.log(alunos.map(alunoDaqui5Anos))

let nome = document.getElementById("nome")
let idade = document.getElementById("idade")
let res = document.getElementById("res")

function clicou() {
    let pessoa = {name: nome, age: idade}
    console.log(pessoa.name)

    if(pessoa.idade > 20) { 
        res.innerHTML = `Seu nome é ${pessoa.name} e você tem ${pessoa.age}. Então você é +18`

    } else { 
        res.innerHTML = `Seu nome é ${pessoa.name} e você tem ${pessoa.age}. Você é menor de idade!`
    }
}

