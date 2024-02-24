// console.log('123')
// console.log('game')
let combo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 4, 6],
    [2, 5, 8],
    [1, 4, 8],
    [8, 4, 0]
 ]
 
 const fields = document.querySelectorAll('.field')
 const title = document.querySelector('.title')
 let xIsTurn = true
 let lastPlayer = ''
 let isGameFinish = false
 
 fields.forEach(field => {
    field.addEventListener('click', function () {
       if (field.textContent === '') {
          if (xIsTurn) {
             field.textContent = 'X'
             title.textContent = 'ходить: O'
             lastPlayer = 'X'
          } else {
             field.textContent = 'O'
             title.textContent = 'ходить: X'
             lastPlayer = 'O'
          }
       }
       isCombo()
       xIsTurn = !xIsTurn
    })
 })
 
 function isCombo() {
    combo.forEach(combination => {
       const [a, b, c] = combination
 
       if (
          fields[a].textContent !== '' &&
          fields[a].textContent === fields[b].textContent &&
          fields[b].textContent === fields[c].textContent
       ) {
          title.textContent = `Победил: ${lastPlayer}`
       }
 
       if (
          !isGameFinish &&
          [...fields].every(field => field.textContent !== '')
       ) {
          title.textContent = `Ничья`
          isGameFinish = true
       }
    })
 }
 
 
 const newGame = document.querySelector('.new-game')
 
 newGame.addEventListener('click', newGameStart)
 function newGameStart() {
    fields.forEach(field => field.textContent = '')
 }
 
 