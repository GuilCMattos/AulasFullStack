let lista = document.getElementById("lista")

let num = parseInt(lista.getAttribute("num"))
let conteudo = ""


for ( let i = 0; i < num; i++ ) { 

    conteudo += "<li>" + i + "</i>"


    
}

lista.innerHTML = conteudo

let l = document.getElementById("birth")

let nume = parseInt(l.getAttribute("nume"))
let numerais = ""

for (let index = 1; index <= nume; index++) {
    numerais += `<option value=birt${index}> ${index} </option>`
}
l.innerHTML = numerais
/*
 l et lastImage = image.getAttribute("src")
    image.setAttribute("src", "img2.jpg") 
*/