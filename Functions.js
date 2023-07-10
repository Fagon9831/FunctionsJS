let sColor = ['Red','Yellow', 'Green' ]


function Luz() {
    const color = sColor.pop()
    const semaforoImg = document.getElementById('semaforo-img').src="./images/" + color + ".png"
    console.log(color)
    if (!sColor.length)
        sColor = ['Red','Yellow', 'Green']
        //document.write("<img id='semaforo-img' src='./images/" + color + ".png' height='400px' alt='Semaforo que si funciona'>")
        //semaforoImg.setAttribute(''src',"./images/"+ color + ".png"' )        
    return color
}

const intervalID = setInterval(Luz, 4500)

