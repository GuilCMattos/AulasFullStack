let lista = document.getElementById("lista")

lista.dataset.num = "4"

let id = lista.dataset.id
console.log(id)

let num = parseInt(lista.dataset.num)

console.log(lista.dataset.num)
let conteudo = ""


for ( let i = 0; i < num; i++ ) { 

    conteudo += "<li>" + i + "</i>"


    
}

lista.innerHTML = conteudo

let birth = document.getElementById("birth")

let b = birth.dataset.b

let c = ""

for ( let inx = 1; inx <= b; inx++) { 
    c += `<option value=b${inx}> ${inx} </option>`
}
birth.innerHTML = c