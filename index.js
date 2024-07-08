let row1Col1 = document.getElementById("row1-col1");
let row1Col2 = document.getElementById("row1-col2");
let row2Col1 = document.getElementById("row2-col1");
let row2Col2 = document.getElementById("row2-col2");

let isRunning = true;


let varRandomNumbers = [2,4,8,16];

function randomIndex(){
    return Math.floor(Math.random() * varRandomNumbers.length);
}

row1Col1.textContent = `${varRandomNumbers[Math.floor(Math.random() * varRandomNumbers.length)]}`;
row1Col2.textContent = `${varRandomNumbers[Math.floor(Math.random() * varRandomNumbers.length)]}`;
row2Col1.textContent = `${varRandomNumbers[Math.floor(Math.random() * varRandomNumbers.length)]}`;
row2Col2.textContent = `${varRandomNumbers[Math.floor(Math.random() * varRandomNumbers.length)]}`;

colorize(row1Col1, row1Col2, row2Col1, row2Col2);

function colorize(row1Col1,row1Col2, row2Col1, row2Col2){
    function setColor(element){
        switch (parseInt(element.textContent)) {
            case 4:
                element.style.backgroundColor = "yellow";
                break;
            case 8:
                element.style.backgroundColor = "orange";
                break;
            case 16:
                element.style.backgroundColor = "red";
                break;
            case 32:
                element.style.backgroundColor = "blue";
                break;
            case 64:
                element.style.backgroundColor = "pink";
                break;
            default:
                element.style.backgroundColor = "white";
          }
    }
setColor(row1Col1);
setColor(row1Col2);
setColor(row2Col1);
setColor(row2Col2);
}



function up(){
    let randomIndex4 = Math.floor(Math.random() * varRandomNumbers.length);
    if(row2Col2.textContent===row1Col2.textContent){
        let sum = parseInt(row1Col2.textContent) + parseInt(row2Col2.textContent);
        row1Col2.textContent =`${sum}`;
        row2Col2.textContent =`${varRandomNumbers[randomIndex4]}`;
    }
    let randomIndex3 = Math.floor(Math.random() * varRandomNumbers.length);
    if(row2Col1.textContent===row1Col1.textContent){
        let sum = parseInt(row1Col1.textContent) + parseInt(row2Col1.textContent);
        row1Col1.textContent =`${sum}`;
        row2Col1.textContent =`${varRandomNumbers[randomIndex3]}`;
    }

    colorize(row1Col1, row1Col2, row2Col1, row2Col2);

    setTimeout(checkPossibleMovesAndEndGame, 3000);

}
function left(){
    let randomIndex4 = Math.floor(Math.random() * varRandomNumbers.length);
    if(row1Col1.textContent===row1Col2.textContent){
        let sum = parseInt(row1Col1.textContent) + parseInt(row1Col2.textContent);
        row1Col1.textContent =`${sum}`;
        row1Col2.textContent =`${varRandomNumbers[randomIndex4]}`;
    }

    let randomIndex3 = Math.floor(Math.random() * varRandomNumbers.length);
    if(row2Col1.textContent===row2Col2.textContent){
        let sum = parseInt(row2Col1.textContent) + parseInt(row2Col2.textContent);
        row2Col1.textContent =`${sum}`;
        row2Col2.textContent =`${varRandomNumbers[randomIndex3]}`;
    }

    colorize(row1Col1, row1Col2, row2Col1, row2Col2);
    setTimeout(checkPossibleMovesAndEndGame, 3000);
}

function down(){
    let randomIndex1 = Math.floor(Math.random() * varRandomNumbers.length);
    if(row1Col1.textContent===row2Col1.textContent){
        let sum = parseInt(row1Col1.textContent) + parseInt(row2Col1.textContent);
        row2Col1.textContent =`${sum}`;
        row1Col1.textContent =`${varRandomNumbers[randomIndex1]}`;
    }
    
    let randomIndex2 = Math.floor(Math.random() * varRandomNumbers.length);
    if(row1Col2.textContent===row2Col2.textContent){
        let sum = parseInt(row1Col2.textContent) + parseInt(row2Col2.textContent);
        row2Col2.textContent =`${sum}`;
        row1Col2.textContent =`${varRandomNumbers[randomIndex2]}`;
    }

    colorize(row1Col1, row1Col2, row2Col1, row2Col2);
    setTimeout(checkPossibleMovesAndEndGame, 3000);
}
function right(){
    let randomIndex1 = Math.floor(Math.random() * varRandomNumbers.length);
    if(row1Col1.textContent===row1Col2.textContent){
        let sum = parseInt(row1Col1.textContent) + parseInt(row1Col2.textContent);
        row1Col2.textContent =`${sum}`;
        row1Col1.textContent =`${varRandomNumbers[randomIndex1]}`;
    }
    let randomIndex2 = Math.floor(Math.random() * varRandomNumbers.length);
    if(row2Col1.textContent===row2Col2.textContent){
        let sum = parseInt(row2Col1.textContent) + parseInt(row2Col2.textContent);
        row2Col2.textContent =`${sum}`;
        row2Col1.textContent =`${varRandomNumbers[randomIndex2]}`;
        isRunning = true;
    }

    colorize(row1Col1, row1Col2, row2Col1, row2Col2);
    setTimeout(checkPossibleMovesAndEndGame, 3000);
}

function calculate(){
    let score=parseInt(row1Col1.textContent) + 
                parseInt(row1Col2.textContent) + 
                parseInt(row2Col1.textContent) + 
                parseInt(row2Col2.textContent);
    window.alert(`GAME IS OVER!!!  Your score is: ${score}`);
    }

// Функция для проверки возможных ходов
function checkPossibleMoves() {
    let movesPossible = false;

    // Проверяем возможные ходы вверх и вниз
    if (row2Col2.textContent === row1Col2.textContent || row2Col1.textContent === row1Col1.textContent) {
        movesPossible = true;
    }

    if (row1Col1.textContent === row1Col2.textContent || row2Col1.textContent === row2Col2.textContent) {
        movesPossible = true;
    }

    // Проверяем возможные ходы влево и вправо
    if (row1Col1.textContent === row2Col1.textContent || row1Col2.textContent === row2Col2.textContent) {
        movesPossible = true;
    }

    return movesPossible;
}

// Функция для завершения игры, если нет возможных ходов
function checkPossibleMovesAndEndGame() {
    if (!checkPossibleMoves()) {
        isRunning = false;
        calculate();
    }
}
checkPossibleMovesAndEndGame();
function resetGame() {
    // Сброс значений ячеек
    row1Col1.textContent = `${varRandomNumbers[Math.floor(Math.random() * varRandomNumbers.length)]}`;
    row1Col2.textContent = `${varRandomNumbers[Math.floor(Math.random() * varRandomNumbers.length)]}`;
    row2Col1.textContent = `${varRandomNumbers[Math.floor(Math.random() * varRandomNumbers.length)]}`;
    row2Col2.textContent = `${varRandomNumbers[Math.floor(Math.random() * varRandomNumbers.length)]}`;

    // Сброс цветов ячеек
    colorize(row1Col1, row1Col2, row2Col1, row2Col2);

    // Сброс переменных игры
    isRunning = true;
}

// Вызов функции сброса для начала новой игры
function checkPossibleMovesAndEndGame() {
    if (!checkPossibleMoves()) {
        isRunning = false;
        calculate(); // Вывод сообщения о счете

        // После вывода сообщения о счете вызываем сброс игры через небольшую задержку
        setTimeout(resetGame, 1000); // Пример: сброс через 1 секунду (1000 миллисекунд)
    }
}