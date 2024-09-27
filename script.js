const inputGrid = document.getElementById('inputGrid');
const totalCharactersDisplay = document.getElementById('totalCharacters');

// Create 252 input boxes (21 boxes * 12 rows)
for (let i = 0; i < 252; i++) {
    const input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 1; // Only one character per input
    input.addEventListener('input', handleInput);
    input.addEventListener('keydown', handleKeyDown);
    inputGrid.appendChild(input);
}

// Function to handle input event
function handleInput(event) {
    if (event.target.value) {
        const nextInput = event.target.nextElementSibling;
        if (nextInput) {
            nextInput.focus();
        }
    }
    updateCharacterCount();
}

// Function to handle keydown event
function handleKeyDown(event) {
    if (event.key === 'Backspace' && !event.target.value) {
        const previousInput = event.target.previousElementSibling;
        if (previousInput) {
            previousInput.focus();
        }
    }
}

// Function to update the total character count
function updateCharacterCount() {
    const inputs = inputGrid.getElementsByTagName('input');
    let totalCharacters = 0;

    for (const input of inputs) {
        if (input.value) {
            totalCharacters += input.value.length;
        }
    }

    totalCharactersDisplay.textContent = totalCharacters;
}
