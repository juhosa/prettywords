let colors = ['84DCC6', 'A5FFD6', 'FFA69E', 'FF686B']

let radiuses = [100, 150, 175, 200, 250]

const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}

const randomRadius = () => {
    return radiuses[Math.floor(Math.random() * radiuses.length)]
}

const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export { randomColor, randomRadius, randomInt }
