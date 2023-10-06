new Vue({
   el: "#app",
   data: {
       gameStarted: false,
       question: "",
       correctColor: "",
       colors: ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "teal", "lime", "cyan", "indigo", "violet", "gray", "black", "white", "maroon", "navy", "olive", "bisque"],
       resultMessage: "",
       score: 0,
       timer: 30,
       timerInterval: null,
   },
   methods: {
       startGame() {
           this.gameStarted = true;
           this.startTimer();
           this.generateQuestion();
       },
       generateQuestion() {
           this.correctColor = this.colors[Math.floor(Math.random() * this.colors.length)];

           this.question = `Pilih warna yang bukan ${this.correctColor}`;
       },
       selectColor(color) {
           if (color !== this.correctColor) {
               this.resultMessage = "Selamat! Anda benar!";
               this.score++;
           } else {
               this.resultMessage = "Maaf, pilih warna yang salah. Coba lagi!";
           }
           this.generateQuestion();
       },
       startTimer() {
           this.timerInterval = setInterval(() => {
               if (this.timer > 0) {
                   this.timer--;
               } else {
                   clearInterval(this.timerInterval);
                   this.resultMessage = `Waktu Habis!`;
               }
           }, 1000);
       },
   },
});