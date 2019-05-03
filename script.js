document.addEventListener('DOMContentLoaded', ready, false)

let canvas = null
let ctx = null

let windowWidth = null
let windowHeight = null

let colors = [
    "84DCC6",
    "A5FFD6",
    "FFA69E",
    "FF686B"
]

let radiuses = [100, 150, 175, 200, 250]

let words = []

function randomColor () {
    return colors[Math.floor(Math.random() * colors.length)]
}

function randomRadius () {
    return radiuses[Math.floor(Math.random() * radiuses.length)]
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function askWords () {
    wordsStr = prompt('Words, split by comma:')
    words = wordsStr.split(',').map(w => w.trim())
}

function ready () {
    console.log('on ready()')

    // console.dir(document.getElementById('the_canvas'))
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight

    canvas = document.getElementById('the_canvas')
    ctx = canvas.getContext('2d')

    canvas.width = windowWidth
    canvas.height = windowHeight

    askWords()

    for (let w of words) {
        if (w !== '') {
            createCircle(w)
        }
    }

    if (process.env.NODE_ENV === 'development') {
        drawCenterDot()
    }

}

function drawCenterDot () {
    let r = 5
    let x = windowWidth / 2
    let y = windowHeight / 2

    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    // ctx.stroke()
    ctx.fillStyle = '#000000'
    ctx.fill()
}

function createCircle (word) {
    let r = randomRadius()
    let x = randomInt(r, windowWidth - r)
    let y = randomInt(r, windowHeight - r)

    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    // ctx.stroke()
    ctx.fillStyle = '#' + randomColor()
    ctx.fill()

    ctx.font = '40pt Verdana'
    ctx.fillStyle = 'white'
    ctx.textAlign = 'center'
    ctx.fillText(word, x, y + 20)
}