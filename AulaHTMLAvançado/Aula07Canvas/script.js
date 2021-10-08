let tela = document.getElementById("tela")

let ctxt = tela.getContext("2d")
ctxt.moveTo(0,0)
ctxt.lineTo(250,250)
ctxt.lineTo(500,0)
ctxt.strokeStyle = "red"
ctxt.lineWidth = 5
ctxt.stroke();