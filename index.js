// Array to hold cell elements
const cells = [document.getElementById("row1-col1"),
                document.getElementById("row1-col2"),
                document.getElementById("row2-col1"),
                document.getElementById("row2-col2")
];
let isRunning = true;
const varRandomNumbers = [2,4,8,16];

// Function to get a random index from varRandomNumbers
function randomIndex(){
    return Math.floor(Math.random() * varRandomNumbers.length);
}

// Function to set random values to each cell
function setRandomValues(){
    cells.forEach(cell => {
        cell.textContent = varRandomNumbers[randomIndex()];
    });
    colorize(cells);
}

// Function to set the background color based on the cell value
function setColor(element){
    const colors = {
        4: "yellow",
        8: "orange",
        16: "red",
        32: "blue",
        64: "pink",
    };
    element.style.backgroundColor = colors[element.textContent] || "white";
}

// Function to colorize all cells
function colorize(elements){
    elements.forEach(setColor);
}

// Function to merge two cells if they have the same value
function mergeCells(cell1, cell2){
    if(cell1.textContent === cell2.textContent){
        cell1.textContent = parseInt(cell1.textContent) + parseInt(cell2.textContent);
        cell2.textContent = varRandomNumbers[randomIndex()];
    }
}

// Function to handle moves in different directions
function game(direction){
    switch(direction){
        case 'up':
            mergeCells(cells[0], cells[2]);
            mergeCells(cells[1], cells[3]);
            break;
        case 'down':
            mergeCells(cells[2], cells[0]);
            mergeCells(cells[3], cells[1]);
            break;
        case 'left':
            mergeCells(cells[0], cells[1]);
            mergeCells(cells[2], cells[3]);
            break;
        case 'right':
            mergeCells(cells[1], cells[0]);
            mergeCells(cells[3], cells[2]);
            break;
    }
    colorize(cells);
    setTimeout(checkPossibleMovesAndEndGame,3000);
}

// Function to calculate the score
function calculateScore(){
    let score = cells.reduce((total, cell) => total + parseInt(cell.textContent), 0);
    window.alert(`GAME IS OVER!!!  Your score is: ${score}`);
}

// Function to check if there are possible moves left
function checkPossibleMoves() {
    return (
        cells[0].textContent === cells[1].textContent ||
        cells[2].textContent === cells[3].textContent ||
        cells[0].textContent === cells[2].textContent ||
        cells[1].textContent === cells[3].textContent
    );
}

// Function to check for possible moves and end the game if none are available
function checkPossibleMovesAndEndGame() {
    if (!checkPossibleMoves()) {
        isRunning = false;
        calculateScore();
        setTimeout(resetGame, 1000);
    }
}

// Function to reset the game
function resetGame(){
    setRandomValues();
    isRunning = true;
}

// Initialize the game
setRandomValues();
checkPossibleMovesAndEndGame();

//function calls to control movements initialized in index.html