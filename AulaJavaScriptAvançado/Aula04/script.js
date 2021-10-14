let usuarios = ["Adriano", "mARCIA", "José"]

function inserirUsuario(nome,callback) { 
    setTimeout(()=>{usuarios.push(nome)
    callback()
    },1000)
    
}

function listarUsuarios() { 
    console.log(usuarios)
}

inserirUsuario("Guilherme", listarUsuarios)



















// function ola() { 
//     console.log("Olá")
// }

// function xau() { 
//     console.log("Xau")
// }

// function saudacao(s,nome) {

// s()
// console.log(nome)

//  }

//  saudacao(xau, "Guilherme")