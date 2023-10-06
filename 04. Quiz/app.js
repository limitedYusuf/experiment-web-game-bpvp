new Vue({
   el: "#app",
   data: {
      gameStarted: false,
      currentIndex: 0,
      selectedOption: '',
      correctAnswers: 0,
      questions: [
         {
            question: "Apa ibukota Indonesia?",
            options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
            correctAnswer: "Jakarta"
         },
         {
            question: "Siapa presiden pertama Indonesia?",
            options: ["Soekarno", "Hatta", "Megawati", "Suharto"],
            correctAnswer: "Soekarno"
         },
         {
            question: "Berapa banyak benua di dunia?",
            options: ["5", "6", "7", "8"],
            correctAnswer: "7"
         },
         {
            question: "Apa warna langit pada siang hari?",
            options: ["Merah", "Kuning", "Biru", "Hijau"],
            correctAnswer: "Biru"
         },
         {
            question: "Berapa banyak hari dalam satu minggu?",
            options: ["5", "6", "7", "8"],
            correctAnswer: "7"
         },
         {
            question: "Siapa penemu gravitasi?",
            options: ["Albert Einstein", "Thomas Edison", "Isaac Newton", "Galileo Galilei"],
            correctAnswer: "Isaac Newton"
         },
         {
            question: "Apa nama planet terbesar di tata surya kita?",
            options: ["Mars", "Jupiter", "Venus", "Saturnus"],
            correctAnswer: "Jupiter"
         },
         {
            question: "Siapa penulis drama 'Romeo dan Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
            correctAnswer: "William Shakespeare"
         },
         {
            question: "Apa warna daun pohon pada musim gugur?",
            options: ["Merah", "Hijau", "Kuning", "Biru"],
            correctAnswer: "Kuning"
         },
         {
            question: "Apa nama samudra terbesar di dunia?",
            options: ["Samudra Pasifik", "Samudra Hindia", "Samudra Atlantik", "Samudra Arktik"],
            correctAnswer: "Samudra Pasifik"
         },
         {
            question: "Siapa penulis novel 'Harry Potter'?",
            options: ["George Orwell", "J.R.R. Tolkien", "J.K. Rowling", "Agatha Christie"],
            correctAnswer: "J.K. Rowling"
         },
         {
            question: "Apa nama benua yang paling dingin di dunia?",
            options: ["Afrika", "Eropa", "Asia", "Antartika"],
            correctAnswer: "Antartika"
         },
         {
            question: "Siapa presiden Amerika Serikat ke-16?",
            options: ["Abraham Lincoln", "John F. Kennedy", "Barack Obama", "Theodore Roosevelt"],
            correctAnswer: "Abraham Lincoln"
         },
         {
            question: "Apa nama sungai terpanjang di dunia?",
            options: ["Sungai Amazon", "Sungai Nil", "Sungai Yangtze", "Sungai Mississippi"],
            correctAnswer: "Sungai Nil"
         },
         {
            question: "Siapa penemu telepon?",
            options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Marie Curie"],
            correctAnswer: "Alexander Graham Bell"
         },
         {
            question: "Apa nama hewan tercepat di darat?",
            options: ["Cheetah", "Leopard", "Singa", "Harimau"],
            correctAnswer: "Cheetah"
         },
         {
            question: "Siapa pelukis terkenal 'Mona Lisa'?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            correctAnswer: "Leonardo da Vinci"
         },
         {
            question: "Apa nama gas yang diperlukan oleh tumbuhan untuk fotosintesis?",
            options: ["Oksigen", "Karbon Dioksida", "Hidrogen", "Nitrogen"],
            correctAnswer: "Karbon Dioksida"
         },
         {
            question: "Siapa ilmuwan yang mengemukakan teori relativitas?",
            options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"],
            correctAnswer: "Albert Einstein"
         }
      ]
   },
   methods: {
      startGame() {
         this.gameStarted = true;
         this.currentIndex = 0;
         this.selectedOption = '';
         this.correctAnswers = 0;
      },
      answerQuestion(option) {
         this.selectedOption = option;
      },
      nextQuestion() {
         if (this.selectedOption === this.questions[this.currentIndex].correctAnswer) {
            this.correctAnswers++;
         }
         this.currentIndex++;
         this.selectedOption = '';
      },
      restartGame() {
         this.gameStarted = false;
         this.currentIndex = 0;
         this.selectedOption = '';
         this.correctAnswers = 0;
      }
   }
});