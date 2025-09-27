// @ts-nocheck
const gameState = {
  currentColor: 'red',
  currentDirection: 1
}

const colorBlockElem = document.getElementById('color-block')
const arrowBlockElem = document.getElementById('arrowBlock')

/**
 * @param {string} newColor
 */
function changeColor(newColor) {
  gameState.currentColor = newColor
  colorBlockElem.style.backgroundColor = newColor

  console.log(`the color is now ${newColor}`)
}

function changeOrder() {
  gameState.currentDirection ^= 1
  arrowBlockElem.classList.add('bigArrow')
  arrowBlockElem.style.transform = gameState.currentDirection === 1 ? 'scaleX(1)' : 'scaleX(-1)'
  
  arrowBlockElem.style.transform = gameState.currentDirection === 1 ? 'scaleX(1)' : 'scaleX(-1)'

}