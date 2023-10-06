new Vue({
   el: "#app",
   data: {
      gameStarted: false,
      holes: [],
      score: 0,
      gameTime: 30,
      timer: null,
   },
   computed: {
      timerText() {
         const minutes = Math.floor(this.gameTime / 60);
         const seconds = this.gameTime % 60;
         return `${minutes}:${seconds.toString().padStart(2, '0')}`;
      },
   },
   methods: {
      startGame() {
         this.gameStarted = true;
         this.score = 0;
         this.initializeHoles();
         this.startTimer();
         this.generateMoles();
      },
      initializeHoles() {
         this.holes = Array.from({ length: 9 }, () => ({ isMole: false }));
      },
      generateMoles() {
         this.timer = setInterval(() => {
            this.randomlyPopulateMoles();
         }, 1000);
         setTimeout(() => {
            clearInterval(this.timer);
            this.gameStarted = false;
            alert(`Permainan Selesai! Skor Anda: ${this.score}`);
         }, this.gameTime * 1000);
      },
      randomlyPopulateMoles() {
         const numMoles = Math.floor(Math.random() * 3) + 1;
         for (let i = 0; i < numMoles; i++) {
            const randomIndex = Math.floor(Math.random() * this.holes.length);
            this.holes[randomIndex].isMole = true;
         }
      },
      whackMole(index) {
         if (this.holes[index].isMole) {
            this.score++;
            this.holes[index].isMole = false;
         }
      },
      startTimer() {
         this.timer = setInterval(() => {
            if (this.gameTime > 0) {
               this.gameTime--;
            } else {
               clearInterval(this.timer);
            }
         }, 1000);
      },
   },
});