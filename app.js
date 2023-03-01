//
const board = document.querySelector('.board')
const boardSize = document.querySelectorAll('.boardSize')
const tools = document.querySelectorAll('.tools')
const reset = document.querySelector('#reset')

//
const boardColor = '#D5D5D5'
let color 
let userInput
const defaultSize = 16

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function colorSquare() {
    if (color === 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`
    } else if (color === 'erase') {
        this.style.backgroundColor = boardColor
    } else {
        this.style.backgroundColor = color
    }
}

function changeColor(input) {
    color = input
}

boardSize.forEach((element) => {
    element.addEventListener('click', () => {
        userInput = Number(element.id)
        drawNewBoard(userInput)
    })
})

reset.addEventListener('click', () => {
    if (!userInput) {
        drawNewBoard(defaultSize)
    } else {
        drawNewBoard(userInput)
    }
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
        
        square.addEventListener('mouseover', colorSquare)

        board.insertAdjacentElement('beforeend', square)
    }
}

drawNewBoard(defaultSize)



