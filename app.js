// @ts-nocheck
const gameState = {
  currentMode: "reg",
  currentColor: 'red',
  currentDirection: 1,
  currentAddCount: 0
}

const colorBlockElem = document.getElementById('color-block')
const arrowBlockElem = document.getElementById('arrowBlock')
const navbarElem = document.getElementById('navBar')

/**
 * @param {string} newColor
 */
function changeColor(newColor) {
  gameState.currentColor = newColor
  colorBlockElem.style.backgroundColor = newColor
  navbarElem.style.backgroundColor = newColor

  console.log(`the color is now ${newColor}`)
}

function changeOrder() {
  gameState.currentDirection ^= 1
  arrowBlockElem.classList.add('bigArrow')
  arrowBlockElem.style.transform = gameState.currentDirection === 1 ? 'scaleX(1)' : 'scaleX(-1)'

  arrowBlockElem.style.transform = gameState.currentDirection === 1 ? 'scaleX(1)' : 'scaleX(-1)'

}

function setGame(mode) {
  gameState.currentMode = mode

}

function addCount(plusCount) {
  var count = 0
  var total = 0
  total = total + count + plusCount
  gameState.currentAddCount = total
  console.log(count, total)
}