new Vue({
   el: "#app",
   data: {
      gameStarted: false,
      question: "",
      userAnswer: "",
      resultMessage: "",
      correctCount: 0,
      wrongCount: 0,
      timer: 30,
      timerInterval: null,
   },
   methods: {
      generateQuestion() {
         const operators = ["+", "-", "*", "/"];
         const randomOperator = operators[Math.floor(Math.random() * operators.length)];

         let num1, num2, correctAnswer;
         switch (randomOperator) {
            case "+":
               num1 = Math.floor(Math.random() * 10) + 1;
               num2 = Math.floor(Math.random() * 10) + 1;
               correctAnswer = num1 + num2;
               this.question = `Berapakah ${num1} + ${num2}?`;
               break;
            case "-":
               num1 = Math.floor(Math.random() * 10) + 1;
               num2 = Math.floor(Math.random() * 10) + 1;
               correctAnswer = num1 - num2;
               this.question = `Berapakah ${num1} - ${num2}?`;
               break;
            case "*":
               num1 = Math.floor(Math.random() * 5) + 1;
               num2 = Math.floor(Math.random() * 5) + 1;
               correctAnswer = num1 * num2;
               this.question = `Berapakah ${num1} * ${num2}?`;
               break;
            case "/":
               correctAnswer = Math.floor(Math.random() * 10) + 1;
               num2 = Math.floor(Math.random() * 5) + 1;
               num1 = correctAnswer * num2;
               this.question = `Berapakah ${num1} / ${num2}? (Hasil bulat)`;
               break;
            default:
               break;
         }

         this.correctAnswer = correctAnswer;
      },
      checkAnswer() {
         const userAnswer = parseFloat(this.userAnswer.replace(',', '.'));
         if (!isNaN(userAnswer) && userAnswer === this.correctAnswer) {
            this.resultMessage = "Selamat! Jawaban Anda benar!";
            this.correctCount++;
         } else {
            this.resultMessage = "Maaf, jawaban Anda salah. Coba lagi!";
            this.wrongCount++;
         }
         this.generateQuestion();
         this.userAnswer = "";
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
      startGame() {
         this.gameStarted = true;
         this.generateQuestion();
         this.startTimer();
      },
   },
});