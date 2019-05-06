import { randomColor, randomInt, randomRadius } from './helpers'

let canvas = null
let ctx = null

let windowWidth = null
let windowHeight = null

let words = []

const askWords = () => {
    let wordsStr = prompt('Words, split by comma:')
    words = wordsStr.split(',').map(w => w.trim())
}

const regen = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    draw()
}

const ready = () => {
    document.getElementById('btnRegen').addEventListener('click', regen)

    windowWidth = window.innerWidth
    windowHeight = window.innerHeight

    canvas = document.getElementById('the_canvas')
    ctx = canvas.getContext('2d')

    canvas.width = windowWidth
    canvas.height = windowHeight

    askWords()

    draw()
}

const draw = () => {
    createCircles()

    if (process.env.NODE_ENV === 'development') {
        drawCenterDot()
    }
}

const createCircles = () => {
    for (let w of words) {
        if (w !== '') {
            createCircle(w)
        }
    }
}

const drawCenterDot = () => {
    let r = 5
    let x = windowWidth / 2
    let y = windowHeight / 2

    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.fillStyle = '#000000'
    ctx.fill()
}

const createCircle = word => {
    let r = randomRadius()
    let x = randomInt(r, windowWidth - r)
    let y = randomInt(r, windowHeight - r)

    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.fillStyle = '#' + randomColor()
    ctx.fill()

    ctx.font = '40pt Verdana'
    ctx.fillStyle = 'white'
    ctx.textAlign = 'center'
    ctx.fillText(word, x, y + 20)
}

document.addEventListener('DOMContentLoaded', ready, false)
