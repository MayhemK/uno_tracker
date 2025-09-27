const gameState = {
  currentColor: 'red',
  currentDirection: 0
}

const colorBlockElem = document.getElementById('color-block')

/**
 * @param {string} newColor
 */
function changeColor(newColor) {
  gameState.currentColor = newColor
  colorBlockElem.style.backgroundColor = newColor

  console.log(`the color is now ${newColor}`)
}