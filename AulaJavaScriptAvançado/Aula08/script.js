
function novoAluno(nome, idade) { 
    return {nome, idade}
}

let alunos = [ 
    novoAluno("Mario", 23), 
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)

]

function alunoDaqui5Anos(aluno) { 
    return {nome: aluno.nome, idade: aluno.idade + 5}
}

console.log(alunos.map(alunoDaqui5Anos))