new Vue({
   el: "#app",
   data: {
      gameStarted: false,
      guess: null,
      targetNumber: null,
      attempts: 0,
      message: null,
      gameOver: false,
   },
   methods: {
      startGame() {
         this.gameStarted = true;
         this.targetNumber = Math.floor(Math.random() * 100) + 1;
         this.attempts = 0;
         this.message = null;
         this.gameOver = false;
      },
      checkGuess() {
         if (this.guess === this.targetNumber) {
            this.message = `Selamat! Anda menebak angka ${this.targetNumber} dengan ${this.attempts + 1} percobaan.`;
            this.gameOver = true;
         } else if (this.guess < this.targetNumber) {
            this.message = `Coba angka yang lebih besar.`;
         } else {
            this.message = `Coba angka yang lebih kecil.`;
         }
         this.attempts++;
      },
      restartGame() {
         this.gameStarted = false;
         this.guess = null;
         this.targetNumber = null;
         this.attempts = 0;
         this.message = null;
         this.gameOver = false;
      },
   },
});