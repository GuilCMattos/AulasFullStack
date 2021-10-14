let usuarios = ["Adriano", "mARCIA", "José"]

function inserirUsuario(nome) { 

    let promise = new Promise(function(resolve,reject){ 

        setTimeout(()=>{
            
            usuarios.push(nome)
            
            let error = false

            if(!error) { 
                resolve()
            } else { 
                reject({msg:"Erro de qualquer coisa"})
            }

            },1000)
            

    })

    return promise
    
    
}

function listarUsuarios() { 
    console.log(usuarios)
}

async function executar() { 
   await inserirUsuario("Guilherme")
    listarUsuarios()
}

executar()
















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