new Vue({
   el: "#app",
   data: {
      cards: [],
      flippedCards: [],
      canFlip: true,
      gameWon: false,
      startTime: 0,
      endTime: 0,
      gameDuration: 0
   },
   methods: {
      startGame(level) {
         this.startTime = new Date().getTime();

         let symbols = [];
         if (level === 'easy') {
            symbols = ["A", "B", "C", "D"];
         } else if (level === 'medium') {
            symbols = ["A", "B", "C", "D", "E", "F"];
         } else if (level === 'hard') {
            symbols = ["A", "B", "C", "D", "E", "F", "G", "H"];
         }

         const shuffledSymbols = symbols.concat(symbols).sort(() => Math.random() - 0.5);
         this.cards = shuffledSymbols.map(value => ({
            value,
            flipped: false,
            matched: false
         }));
         this.flippedCards = [];
         this.canFlip = true;
         this.gameWon = false;
      },
      flipCard(index) {
         if (!this.canFlip || this.cards[index].flipped || this.cards[index].matched) return;
         this.cards[index].flipped = true;
         this.flippedCards.push(index);

         if (this.flippedCards.length === 2) {
            const [index1, index2] = this.flippedCards;
            if (this.cards[index1].value === this.cards[index2].value) {
               this.cards[index1].matched = true;
               this.cards[index2].matched = true;
               if (this.cards.every(card => card.matched)) {
                  this.endTime = new Date().getTime();
                  this.gameDuration = ((this.endTime - this.startTime) / 60000).toFixed(2);
                  this.gameWon = true;
               }
            }

            this.canFlip = false;
            setTimeout(() => {
               this.cards[index1].flipped = false;
               this.cards[index2].flipped = false;
               this.flippedCards = [];
               this.canFlip = true;
            }, 1000);
         }
      },
      restartGame() {
         this.startGame();
      }
   }
});