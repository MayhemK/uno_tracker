// =========================================================
// 1. STATE MANAGEMENT
// =========================================================

// Object to hold the current game state
const gameState = {
    // Initial color is Red, matching the CSS default
    currentColor: 'red',
    // 0 = Clockwise (CW), 1 = Counter-Clockwise (CCW)
    currentDirection: 0, 
};

// =========================================================
// 2. DOM ELEMENTS
// =========================================================

const colorBlockEl = document.getElementById('color-block');
const arrowIconEl = document.getElementById('arrow-icon');


// =========================================================
// 3. COLOR LOGIC
// =========================================================

/**
 * Changes the background color of the top block.
 * @param {string} newColor - 'red', 'yellow', 'green', or 'blue'
 */
function changeColor(newColor) {
    // 1. Update the state
    gameState.currentColor = newColor;

    // 2. Update the DOM (Change the background color)
    // We use .style.backgroundColor to apply the change directly to the element.
    colorBlockEl.style.backgroundColor = newColor;

    console.log(`The current color is now ${newColor}`);
}


// =========================================================
// 4. DIRECTION/TOGGLE LOGIC
// =========================================================

/**
 * Toggles the direction of play (CW/CCW) and rotates the arrow icon.
 */
function toggleOrder() {
    // 1. Update the state
    // If direction is 0 (CW), set to 1 (CCW). If 1 (CCW), set to 0 (CW).
    gameState.currentDirection = 1 - gameState.currentDirection;

    // 2. Update the DOM (Rotate the arrow)
    updateDirectionArrow();

    console.log(`Direction toggled. Current direction: ${gameState.currentDirection === 0 ? 'Clockwise' : 'Counter-Clockwise'}`);
}


/**
 * Helper function to apply the correct rotation class based on state.
 */
function updateDirectionArrow() {
    if (gameState.currentDirection === 0) {
        // Clockwise (Default/Right Arrow)
        arrowIconEl.classList.remove('rotate-ccw');
        arrowIconEl.classList.add('rotate-cw');
    } else {
        // Counter-Clockwise (Reversed/Left Arrow)
        arrowIconEl.classList.remove('rotate-cw');
        arrowIconEl.classList.add('rotate-ccw');
    }
}


// =========================================================
// 5. INITIAL SETUP
// =========================================================

// Run on page load to set the initial color and arrow direction.
function initializeTracker() {
    // Initial color is set by CSS/HTML, but this confirms it.
    changeColor(gameState.currentColor); 
    
    // Set initial arrow state to CW
    updateDirectionArrow();
}

// Call the initialization function when the script loads
initializeTracker();