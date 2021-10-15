let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"



function converter() { 
    let input = document.getElementById("valor")
    let valor = input.value 

    fetch(url)
    .then((res)=> { 
        return res.json()
    })
    .then((data)=> { 
        let USDBRL = data.USDBRL.ask

        let resultado =`${valor} dólares = ${USDBRL * valor} em reais`

        document.getElementById("resultado").innerHTML = resultado
    })

    

}



    