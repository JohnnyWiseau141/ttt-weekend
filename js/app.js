/*-------------------------------- Constants --------------------------------*/

    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ]


/*---------------------------- Variables (state) ----------------------------*/

let board, playerTurn, isWinner





/*------------------------ Cached Element References ------------------------*/

	const squares = document.querySelectorAll('.squares')
  const msgToPlayer = document.querySelector('#message')
  const resetGame = document.querySelector('#reset-button')

function handleClick(sec) {
	resetGame.removeAttribute('hidden')
  let sqIdx = parseInt(sec.target.id.replace('sq', ''))

	if (board[sqIdx] || isWinner) {
		return
	}

	board[sqIdx] = playerTurn

	playerTurn *= -1 

	isWinner = winnerIsYou()

	render()
} 

/*----------------------------- Event Listeners -----------------------------*/

squares.forEach((cell) => {
		cell.addEventListener('click', handleClick)
})

resetGame.addEventListener('click', init)


/*-------------------------------- Functions --------------------------------*/

init() 


			
function init() {
	resetGame.setAttribute('hidden', '')
  msgToPlayer.innerText = "Player 1, pick a square!"
  board = [null, null, null, null, null, null, null, null, null]
  squares.innerHTML = ''
  isWinner = false
  playerTurn = 1
	squares.forEach((sec) => {
		sec.innerText = ''
	})
  render()
}


function render() {
  board.forEach(function (section, idx){
    if (section === 1) {
      squares[idx].innerText = 'X'
      squares[idx].style.backgroundColor = 'blue'
    }else if (section === (-1)) {
      squares[idx].innerText = 'O'
      squares[idx].style.backgroundColor = 'red'
    } else if (section === null ){
      squares[idx].style.backgroundColor = 'white'
    }
  })

  if (!isWinner ) {
    if (playerTurn === 1) {
    msgToPlayer.innerText = 'Player 1 go!'
    }else{
    msgToPlayer.innerText = 'Player 2 go!'
    }
  } else if (isWinner === "T") {
    msgToPlayer.innerText = 'Tie game!'
  } else {
    if (isWinner === 1){
      msgToPlayer.innerText = 'Player 1 wins!'
    } else {
      msgToPlayer.innerText = 'Player 2 wins!'
    }
		
  }
}
	  



function winnerIsYou() {
	if(Math.abs(board[0] + board[1] + board[2])=== 3)return board[0]
	if(Math.abs(board[3] + board[4] + board[5])=== 3)return board[3]
	if(Math.abs(board[6] + board[7] + board[8])=== 3)return board[6]
	if(Math.abs(board[0] + board[3] + board[6])=== 3)return board[0]
	if(Math.abs(board[1] + board[4] + board[7])=== 3)return board[1]
	if(Math.abs(board[2] + board[5] + board[8])=== 3)return board[2]
	if(Math.abs(board[0] + board[4] + board[8])=== 3)return board[0]
	if(Math.abs(board[2] + board[4] + board[6])=== 3)return board[2]
	if (board.includes(null)) {
   return null
} else {
  	return 'T'
}
}
