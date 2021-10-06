function loaded() {
let t = document.getElementById("title")
// t.onclick= mudarText 

    t.addEventListener("mouseover", mudarText)
    t.addEventListener("mouseout", mouseout)
}

function mudarText() {
    this.innerHTML = "Novo Texto"
}

function mouseout() { 
    this.innerHTML ="Mouse fora do elemento"
}