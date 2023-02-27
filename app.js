//
const board = document.querySelector('.board')
const boardSize = document.querySelectorAll('.boardSize')


boardSize.forEach((element) => {
    element.addEventListener('click', () => {
        let userInput = Number(element.id)
        console.log(userInput)

        let squares = document.querySelectorAll('.board > *')
        squares.forEach((div) => div.remove())
        
        board.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`
        board.style.gridTemplateRows = `repeat(${userInput}, 1fr)`

        let totalDivs = userInput * userInput

        for (let i = 0; i < totalDivs; i++) {
            let square = document.createElement('div')
            square.style.backgroundColor = '#9099A2'
            square.style.border = '.5px solid black'

            square.onmouseover = function() {
                this.style.backgroundColor = '#96858F'
            }
            square.onmouseleave = function() {
                this.style.backgroundColor = '#9099A2'
            }
            board.insertAdjacentElement('beforeend', square)
        }
    })
    
})


function drawDeafultBoard () {
    board.style.gridTemplateColumns = 'repeat(16, 1fr)'
    board.style.gridTemplateRows = 'repeat(16, 1fr)'

    for (let i = 0; i < 256; i++) {
        let square = document.createElement('div')
        square.style.backgroundColor = '#9099A2'
        square.style.border = '.5px solid black'

        square.onmouseover = function() {
            this.style.backgroundColor = '#96858F'
        }
        square.onmouseleave = function() {
            this.style.backgroundColor = '#9099A2'
        }
        board.insertAdjacentElement('beforeend', square)
    }
}

drawDeafultBoard()


