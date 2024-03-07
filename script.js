 // Lógica do jogo da velha
 var currentPlayer = "X";
 var board = ["", "", "", "", "", "", "", "", ""];
 var disabledBoard = false;

 function makeMove(cellIndex) {
     if (board[cellIndex] === "" && !disabledBoard) {
         board[cellIndex] = currentPlayer;
         document.getElementsByClassName("cell")[cellIndex].innerText = currentPlayer;
         checkWinner();
         togglePlayer();
     }
 }

 function togglePlayer() {
     currentPlayer = currentPlayer === "X" ? "O" : "X";
 }

 function checkWinner() {
     var winningCombinations = [
         [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
         [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
         [0, 4, 8], [2, 4, 6] // Diagonais
     ];

     for (var i = 0; i < winningCombinations.length; i++) {
         var [a, b, c] = winningCombinations[i];
         if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
             document.getElementsByClassName("message")[0].innerText = "Player " + currentPlayer + " wins!";
             disableBoard();
             break;
         }
     }

     if (!board.includes("")) {
         document.getElementsByClassName("message")[0].innerText = "It's a draw!";
         disableBoard();
     }
 }

 function disableBoard() {
    disabledBoard = true;
 }