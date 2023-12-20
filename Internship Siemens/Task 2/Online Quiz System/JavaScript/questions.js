// Function to shuffle the array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Array of questions
let questions = [
  {
    id: 1,
    question: "What is the capital city of Australia?",
    answer: "C. Canberra",
    options: ["A. Sydney", "B. Melbourne", "C. Canberra", "D. Brisbane"],
  },
  {
    id: 2,
    question: "Which element has the chemical symbol 'O'?",
    answer: "A. Oxygen",
    options: ["A. Oxygen", "B. Gold", "C. Iron", "D. Carbon"],
  },
  {
    id: 3,
    question: "In which year did World War II end?",
    answer: "B. 1945",
    options: ["A. 1939", "B. 1945", "C. 1955", "D. 1965"],
  },
  {
    id: 4,
    question: "Who painted the Mona Lisa?",
    answer: "C. Leonardo da Vinci",
    options: [
      "A. Vincent van Gogh",
      "B. Pablo Picasso",
      "C. Leonardo da Vinci",
      "D. Michelangelo",
    ],
  },
  {
    id: 5,
    question: "What is the largest ocean on Earth?",
    answer: "A. Pacific Ocean",
    options: [
      "A. Pacific Ocean",
      "B. Atlantic Ocean",
      "C. Indian Ocean",
      "D. Arctic Ocean",
    ],
  },
  {
    id: 6,
    question: "Who wrote 'To Kill a Mockingbird'?",
    answer: "B. Harper Lee",
    options: [
      "A. J.K. Rowling",
      "B. Harper Lee",
      "C. George Orwell",
      "D. Ernest Hemingway",
    ],
  },
  {
    id: 7,
    question: "Which planet is known as the 'Red Planet'?",
    answer: "B. Mars",
    options: ["A. Jupiter", "B. Mars", "C. Venus", "D. Saturn"],
  },
  {
    id: 8,
    question: "What is the currency of Japan?",
    answer: "C. Japanese Yen",
    options: ["A. Yuan", "B. Won", "C. Japanese Yen", "D. Ringgit"],
  },
  {
    id: 9,
    question: "Who developed the theory of relativity?",
    answer: "A. Albert Einstein",
    options: [
      "A. Albert Einstein",
      "B. Isaac Newton",
      "C. Galileo Galilei",
      "D. Nikola Tesla",
    ],
  },
  {
    id: 10,
    question: "Which country is known as the 'Land of the Rising Sun'?",
    answer: "C. Japan",
    options: ["A. China", "B. South Korea", "C. Japan", "D. Vietnam"],
  },
  {
    id: 11,
    question: "What is the largest organ in the human body?",
    answer: "D. Skin",
    options: ["A. Heart", "B. Liver", "C. Brain", "D. Skin"],
  },
  {
    id: 12,
    question: "In what year did the Titanic sink?",
    answer: "B. 1912",
    options: ["A. 1905", "B. 1912", "C. 1923", "D. 1931"],
  },
  {
    id: 13,
    question: "Who wrote '1984'?",
    answer: "C. George Orwell",
    options: [
      "A. Aldous Huxley",
      "B. J.R.R. Tolkien",
      "C. George Orwell",
      "D. Ray Bradbury",
    ],
  },
  {
    id: 14,
    question: "What is the world's largest desert?",
    answer: "A. Antarctica",
    options: [
      "A. Antarctica",
      "B. Sahara Desert",
      "C. Gobi Desert",
      "D. Atacama Desert",
    ],
  },
  {
    id: 15,
    question: "Who painted the ceiling of the Sistine Chapel?",
    answer: "D. Michelangelo",
    options: [
      "A. Leonardo da Vinci",
      "B. Raphael",
      "C. Vincent van Gogh",
      "D. Michelangelo",
    ],
  },
  {
    id: 16,
    question: "What is the smallest prime ider?",
    answer: "A. 2",
    options: ["A. 2", "B. 1", "C. 3", "D. 5"],
  },
  {
    id: 17,
    question: "Who is known as the 'Father of Computer Science'?",
    answer: "C. Alan Turing",
    options: [
      "A. Bill Gates",
      "B. Steve Jobs",
      "C. Alan Turing",
      "D. Tim Berners-Lee",
    ],
  },
  {
    id: 18,
    question: "What is the largest mammal in the world?",
    answer: "D. Blue Whale",
    options: ["A. Elephant", "B. Giraffe", "C. Gorilla", "D. Blue Whale"],
  },
  {
    id: 19,
    question: "In what year did the United States declare its independence?",
    answer: "B. 1776",
    options: ["A. 1692", "B. 1776", "C. 1801", "D. 1850"],
  },
  {
    id: 20,
    question: "What is the largest planet in our solar system?",
    answer: "A. Jupiter",
    options: ["A. Jupiter", "B. Saturn", "C. Uranus", "D. Neptune"],
  },
  {
    id: 21,
    question: "Who wrote 'Pride and Prejudice'?",
    answer: "A. Jane Austen",
    options: [
      "A. Jane Austen",
      "B. Charlotte Brontë",
      "C. Emily Dickinson",
      "D. Virginia Woolf",
    ],
  },
  {
    id: 22,
    question: "Which country is known as the 'Land of a Thousand Lakes'?",
    answer: "D. Finland",
    options: ["A. Canada", "B. Sweden", "C. Norway", "D. Finland"],
  },
  {
    id: 23,
    question: "What is the capital city of Brazil?",
    answer: "B. Brasília",
    options: [
      "A. Rio de Janeiro",
      "B. Brasília",
      "C. São Paulo",
      "D. Salvador",
    ],
  },
  {
    id: 24,
    question: "Who discovered penicillin?",
    answer: "A. Alexander Fleming",
    options: [
      "A. Alexander Fleming",
      "B. Louis Pasteur",
      "C. Marie Curie",
      "D. Jonas Salk",
    ],
  },
  {
    id: 25,
    question: "What is the currency of Russia?",
    answer: "B. Russian Ruble",
    options: ["A. Euro", "B. Russian Ruble", "C. Dollar", "D. Yen"],
  },
  {
    id: 26,
    question: "Who is known as the 'Queen of Pop'?",
    answer: "C. Madonna",
    options: ["A. Beyoncé", "B. Rihanna", "C. Madonna", "D. Lady Gaga"],
  },
  {
    id: 27,
    question: "What is the largest continent on Earth?",
    answer: "A. Asia",
    options: ["A. Asia", "B. Africa", "C. North America", "D. Europe"],
  },
  {
    id: 28,
    question: "In what year did the Berlin Wall fall?",
    answer: "C. 1989",
    options: ["A. 1975", "B. 1980", "C. 1989", "D. 1995"],
  },
  {
    id: 29,
    question: "Who is the author of 'The Great Gatsby'?",
    answer: "B. F. Scott Fitzgerald",
    options: [
      "A. Ernest Hemingway",
      "B. F. Scott Fitzgerald",
      "C. J.D. Salinger",
      "D. Mark Twain",
    ],
  },
  {
    id: 30,
    question: "What is the longest river in the world?",
    answer: "A. Nile",
    options: ["A. Nile", "B. Amazon", "C. Yangtze", "D. Mississippi"],
  },
  {
    id: 31,
    question: "Who painted the 'Starry Night'?",
    answer: "A. Vincent van Gogh",
    options: [
      "A. Vincent van Gogh",
      "B. Pablo Picasso",
      "C. Claude Monet",
      "D. Leonardo da Vinci",
    ],
  },
  {
    id: 32,
    question: "What is the capital city of South Korea?",
    answer: "D. Seoul",
    options: ["A. Tokyo", "B. Beijing", "C. Hanoi", "D. Seoul"],
  },
  {
    id: 33,
    question: "Who was the first woman to win a Nobel Prize?",
    answer: "A. Marie Curie",
    options: [
      "A. Marie Curie",
      "B. Mother Teresa",
      "C. Malala Yousafzai",
      "D. Amelia Earhart",
    ],
  },
  {
    id: 34,
    question: "What is the speed of light?",
    answer: "C. 299,792 kilometers per second",
    options: [
      "A. 150,000 kilometers per second",
      "B. 200,000 kilometers per second",
      "C. 299,792 kilometers per second",
      "D. 350,000 kilometers per second",
    ],
  },
  {
    id: 35,
    question: "Which country is known as the 'Land of the Rising Sun'?",
    answer: "C. Japan",
    options: ["A. China", "B. South Korea", "C. Japan", "D. Vietnam"],
  },
  {
    id: 36,
    question: "Who wrote 'Pride and Prejudice'?",
    answer: "A. Jane Austen",
    options: [
      "A. Jane Austen",
      "B. Charlotte Brontë",
      "C. Emily Dickinson",
      "D. Virginia Woolf",
    ],
  },
  {
    id: 37,
    question: "What is the largest planet in our solar system?",
    answer: "A. Jupiter",
    options: ["A. Jupiter", "B. Saturn", "C. Uranus", "D. Neptune"],
  },
  {
    id: 38,
    question: "Who is known as the 'Father of Computer Science'?",
    answer: "C. Alan Turing",
    options: [
      "A. Bill Gates",
      "B. Steve Jobs",
      "C. Alan Turing",
      "D. Tim Berners-Lee",
    ],
  },
  {
    id: 39,
    question: "In which year did the Titanic sink?",
    answer: "B. 1912",
    options: ["A. 1905", "B. 1912", "C. 1925", "D. 1931"],
  },
  {
    id: 40,
    question: "Who developed the theory of relativity?",
    answer: "D. Albert Einstein",
    options: [
      "A. Isaac Newton",
      "B. Galileo Galilei",
      "C. Nikola Tesla",
      "D. Albert Einstein",
    ],
  },
  {
    id: 41,
    question: "Which country is known as the 'Land of the Rising Sun'?",
    answer: "A. Japan",
    options: ["A. Japan", "B. China", "C. South Korea", "D. Vietnam"],
  },
  {
    id: 42,
    question: "What is the smallest prime number?",
    answer: "B. 2",
    options: ["A. 1", "B. 2", "C. 3", "D. 5"],
  },
  {
    id: 43,
    question: "Who painted 'Starry Night'?",
    answer: "C. Vincent van Gogh",
    options: [
      "A. Claude Monet",
      "B. Pablo Picasso",
      "C. Vincent van Gogh",
      "D. Salvador Dalí",
    ],
  },
  {
    id: 44,
    question: "What is the capital city of Canada?",
    answer: "C. Ottawa",
    options: ["A. Toronto", "B. Vancouver", "C. Ottawa", "D. Montreal"],
  },
  {
    id: 45,
    question: "Who is known as the 'Queen of Pop'?",
    answer: "A. Madonna",
    options: ["A. Madonna", "B. Beyoncé", "C. Lady Gaga", "D. Taylor Swift"],
  },
  {
    id: 46,
    question: "Which gas is responsible for the greenhouse effect?",
    answer: "B. Carbon dioxide",
    options: [
      "A. Oxygen",
      "B. Carbon dioxide",
      "C. Methane",
      "D. Nitrous oxide",
    ],
  },
  {
    id: 47,
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "C. William Shakespeare",
    options: [
      "A. Jane Austen",
      "B. Charles Dickens",
      "C. William Shakespeare",
      "D. Emily Brontë",
    ],
  },
  {
    id: 48,
    question: "What is the largest mammal in the world?",
    answer: "D. Blue whale",
    options: [
      "A. African elephant",
      "B. Giraffe",
      "C. Polar bear",
      "D. Blue whale",
    ],
  },
  {
    id: 49,
    question: "In which year did World War I begin?",
    answer: "B. 1914",
    options: ["A. 1905", "B. 1914", "C. 1925", "D. 1931"],
  },
  {
    id: 50,
    question: "What is the capital city of South Africa?",
    answer: "A. Pretoria",
    options: ["A. Pretoria", "B. Cape Town", "C. Johannesburg", "D. Durban"],
  },
];

// Shuffle the questions array
shuffleArray(questions);
