

let video = document.getElementById("video1")
let controle = document.getElementById("control")

function retroceder() { 
    video.currentTime -= 15;

}

function avancar() { 
    video.currentTime += 15;

}

function diminuir_vel() { 
    video.playbackRate -= 0.5

}

function aumentar_vel() { 
    video.playbackRate += 0.5

}

function play() { 
    video.play();

}

function stop() { 
    video.pause();
    video.currentTime=0

}

let teste = document.getElementById("teste")
let vis = true

function desaparecer() { 
    if(vis) { 
        teste.style.display = "none"
        vis = false
    } else { 
        teste.style.display ="block"
        vis = true
    }
}
    