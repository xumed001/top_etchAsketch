//
const board = document.querySelector('.board')
const boardSize = document.querySelectorAll('.boardSize')
const tools = document.querySelectorAll('.tools')

//
const boardColor = '#D5D5D5'
const defaultSize = 16

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function addsHoverEffect() {
    this.style.backgroundColor = '#96858F'
}

function eraseMode() {
    this.style.backgroundColor = boardColor
}

function removesHoverEffect() {
    this.style.backgroundColor = boardColor
}


// function drawDeafultBoard () {
//     board.style.gridTemplateColumns = 'repeat(16, 1fr)'
//     board.style.gridTemplateRows = 'repeat(16, 1fr)'

//     for (let i = 0; i < 256; i++) {
//         let square = document.createElement('div')
//         square.style.backgroundColor = boardColor
//         square.style.border = '.1px solid #6D7993'

//         // square.onmouseover = addsHoverEffect
//         // square.onmouseleave = removesHoverEffect

//         square.onmousedown = eraseMode
        

//         board.insertAdjacentElement('beforeend', square)
//     }
// }

boardSize.forEach((element) => {
    element.addEventListener('click', () => {
        let userInput = Number(element.id)
        console.log(userInput)
        drawNewBoard(userInput)
    })
})

tools.forEach((element) => {
    element.addEventListener('click', () => {
        let currentTool = element.id
        console.log(currentTool)
    })
})

function drawNewBoard (x) {
    let squares = document.querySelectorAll('.board > *')
    squares.forEach((div) => div.remove())
    
    board.style.gridTemplateColumns = `repeat(${x}, 1fr)`
    board.style.gridTemplateRows = `repeat(${x}, 1fr)`

    let totalDivs = x * x

    for (let i = 0; i < totalDivs; i++) {
        let square = document.createElement('div')
        square.style.backgroundColor = boardColor
        square.style.border = '.1px solid #6D7993'

        square.onmouseover = addsHoverEffect

        board.insertAdjacentElement('beforeend', square)
    }
}

drawNewBoard(defaultSize)



