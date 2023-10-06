new Vue({
   el: "#app",
   data: {
      gameStarted: false,
      spinning: false,
      slots: ["🍒", "🍊", "🍋", "🍇", "🍉", "🍓", "🍍", "🍌", "🍎"],
      resultMessage: "",
      selectedSlots: ["", "", ""],
      bet: 1,
      score: 5,
   },
   methods: {
      startGame() {
         this.gameStarted = true;
         this.resultMessage = "";
         this.selectedSlots = ["", "", ""];
      },
      spin() {
         if (!this.spinning) {
            if (this.score < this.bet) {
               this.resultMessage = "Taruhan melebihi total skor.";
               return;
            }

            this.spinning = true;
            this.selectedSlots = ["", "", ""];
            this.resultMessage = "";

            const spinInterval = setInterval(() => {
               this.selectedSlots = this.selectedSlots.map(() => {
                  const randomIndex = Math.floor(Math.random() * this.slots.length);
                  return this.slots[randomIndex];
               });
            }, 100);

            setTimeout(() => {
               clearInterval(spinInterval);
               this.checkResult();
               this.spinning = false;
            }, 2000);
         }
      },
      checkResult() {
         const uniqueSlots = [...new Set(this.selectedSlots)];

         if (uniqueSlots.length === 1) {
            this.resultMessage = "Selamat! Anda Menang!";
            this.score += this.bet * 3;
         } else {
            this.resultMessage = "Coba lagi!";
            this.score -= this.bet;
         }
      },
      restartGame() {
         this.gameStarted = false;
         this.spinning = false;
         this.resultMessage = "";
         this.selectedSlots = ["", "", ""];
      },
   },
});