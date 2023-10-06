new Vue({
   el: "#app",
   data: {
      currentPlayer: "",
      board: Array(9).fill(""),
      gameStarted: false,
      gameWon: false,
      gameOver: false,
   },
   computed: {
      gameStatus() {
         if (this.checkWinner("X")) {
            return "Pemain X Menang!";
         } else if (this.checkWinner("O")) {
            return "Pemain O Menang!";
         } else if (this.board.every(cell => cell !== "")) {
            this.gameOver = true;
            return "Permainan Seri!";
         } else {
            return "Permainan Berlangsung...";
         }
      },
   },
   methods: {
      startGame(player) {
         this.currentPlayer = player;
         this.gameStarted = true;
      },
      makeMove(index) {
         if (!this.board[index] && this.gameStatus === "Permainan Berlangsung...") {
            this.board[index] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
         }
      },
      checkWinner(player) {
         const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
         ];

         for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (this.board[a] === player && this.board[b] === player && this.board[c] === player) {
               this.gameWon = true;
               return true;
            }
         }
         return false;
      },
      restartGame() {
         this.currentPlayer = "";
         this.board = Array(9).fill("");
         this.gameStarted = false;
         this.gameWon = false;
         this.gameOver = false;
      },
   },
});