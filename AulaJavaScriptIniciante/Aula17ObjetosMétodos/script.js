function calcMedia (){ 
    return (this.notas[0] + this.notas[1]) / 2
} 
var aluno = { 
    nome: "Igor",
    notas: [9,8],

    media: calcMedia
    
}

// This = isso. 

 var aluno1 = { 
   nome: "João",
    notas: [6,8],

    media: calcMedia
    } 


console.log(aluno.nome)
console.log(aluno.media())
console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))
