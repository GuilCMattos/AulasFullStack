

function novoAluno(nome, idade) { 
    return {nome, idade}
}

let alunos = [ 
    novoAluno("Mario", 23), 
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)

]

// for(let aluno of alunos) {
//     if (aluno.idade < 30)
//     console.log(aluno.nome)

// }
  
function temMenosde30(aluno) { 
    return aluno.idade < 30
}

function temMaisde30(aluno) { 
    return aluno.idade > 30
}


function filtro(callback) {
    let alunosFiltrados = []
    for(let aluno of this) { 
        if(callback(aluno)){
            alunosFiltrados.push(aluno)
        }
    }
    return alunosFiltrados
}

alunos.filtro = filtro

console.log(alunos.filtro(temMaisde30))