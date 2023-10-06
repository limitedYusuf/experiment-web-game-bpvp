new Vue({
   el: "#app",
   data: {
      points: 0,
      level: 1,
      challengeActive: false,
      challengeText: "",
      challengeTime: 0,
      gameOver: false,
      gameStarted: false,
      challengePoints: 0,
      challengeLevel: "",
      gameWon: false,
   },
   methods: {
      clickButton() {
         this.points += this.level === "easy" ? 1 : this.level === "medium" ? 2 : 3;

         if (this.challengeActive && this.points >= this.challengePoints) {
            this.challengeActive = false;
            this.challengeText = "Anda jago!";
            this.gameWon = true;
         }

         if (this.challengeActive && this.points < this.challengePoints && this.challengeTime <= 0) {
            this.challengeActive = false;
            this.gameOver = true;
         }
      },
      startGame(level) {
         this.gameStarted = true;
         this.points = 0;
         this.level = level;
         this.challengeActive = true;
         this.challengeLevel = level;
         this.challengePoints = this.getPointsRequired();
         this.challengeText = `Tantangan: Capai Level ${level} dengan ${this.challengePoints} poin dalam waktu ${level === "easy" ? "30" : level === "medium" ? "60" : "90"
            } detik`;
         this.startTimer(level);
      },
      getPointsRequired() {
         if (this.level === "easy") {
            return 5;
         } else if (this.level === "medium") {
            return 100;
         } else if (this.level === "hard") {
            return 150;
         }
      },
      startTimer(level) {
         const targetTime = level === "easy" ? 30 : level === "medium" ? 60 : 90;
         this.challengeTime = targetTime;
         const timerInterval = setInterval(() => {
            if (this.challengeTime > 0) {
               this.challengeTime--;
            } else {
               clearInterval(timerInterval);
               if (this.challengeActive && this.points < this.challengePoints) {
                  this.challengeActive = false;
                  this.gameOver = true;
               }
            }
         }, 1000);
      },
      restartGame() {
         this.gameStarted = false;
         this.points = 0;
         this.level = 1;
         this.challengeActive = false;
         this.challengeText = "";
         this.gameOver = false;
         this.gameWon = false;
      }
   }
});