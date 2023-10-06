new Vue({
   el: "#app",
   data: {
      words: [
         "kucing", "anjing", "burung", "ikan", "kelinci",
         "gajah", "jerapah", "singa", "buaya", "kuda",
         "kanguru", "kelelawar", "ular", "kupu-kupu", "lumba-lumba",
         "panda", "hamster", "bebek", "babi", "katak",
         "kucing hutan", "kijang", "zebra", "hiu", "ayam",
         "sapi", "merpati", "macan", "penguin", "bintang laut",
         "badak", "penyu", "orangutan", "kadal", "kancil",
         "koala", "cicak", "puma", "gecko", "alpaca",
         "harimau", "elang", "anjing laut", "canguru", "kura-kura",
         "ibis", "beruang", "lebah", "lalat", "puma"
      ],
      shuffledWord: "",
      guess: "",
      resultMessage: "",
   },
   methods: {
      shuffleWord() {
         const randomIndex = Math.floor(Math.random() * this.words.length);

         const shuffledWord = [...this.words[randomIndex]];

         for (let i = shuffledWord.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledWord[i], shuffledWord[j]] = [shuffledWord[j], shuffledWord[i]];
         }

         this.shuffledWord = shuffledWord.join('');
         this.originalWord = this.words[randomIndex];
      },
      checkGuess() {
         if (this.guess.toLowerCase() === this.originalWord.toLowerCase()) {
            this.resultMessage = "Selamat! Anda benar!";
         } else {
            this.resultMessage = "Maaf, tebakan Anda salah. Coba lagi!";
         }
      },
   },
   mounted() {
      this.shuffleWord();
   },
});