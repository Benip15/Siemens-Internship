// Selecting DOM elements (my const are here, I put them here to be easy to edit and easy to find them in my code)
const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");
const optionList = document.querySelector(".option-list");
const resultBox = document.querySelector(".result-box");
const nextBtn = document.querySelector(".next-btn");
const tryAgainBtn = document.querySelector(".tryAgain-btn");
const goHomeBtn = document.querySelector(".goHome-btn");

// Event handlers for buttons:

// 1. startBtn (this button popup the .popup-info, this is why I choose to use .add() method)
startBtn.onclick = () => {
  popupInfo.classList.add("active");
  main.classList.add("active");
};

// 2. exitBtn (this button remove the.popup-info if you dont want to continue, this is why I choose to use .remove() method)
exitBtn.onclick = () => {
  popupInfo.classList.remove("active");
  main.classList.remove("active");
};

// 3. continueBtn (this is the buttton that make the transition to the quiz section. If we want to take the quiz, all u have to do is to press continueBtn and this will close the .popup-info and will display the first question)
continueBtn.onclick = () => {
  quizSection.classList.add("active");
  popupInfo.classList.remove("active");
  main.classList.remove("active");
  quizBox.classList.add("active");
  //Initialize the quiz
  showQuestions(0);
  questionCounter(1);
  headerScore();
};

// 4. tryAgainBtn (this is the button that it will apeard when you finish the quiz. When you qive the answer to the last question, nextBtn and reultBox will dissapear automatically and will popup a the .result-box)
tryAgainBtn.onclick = () => {
  quizBox.classList.add("active");
  nextBtn.classList.remove("active");
  resultBox.classList.remove("active");
  // Initialize or reset variables for quiz state and display initial question and score
  questionCount = 0; // Reset the index of the current question
  questionId = 1; // Reset the current question number
  userScore = 0; // Reset the user's score to 0
  // Update the display to show the current question
  showQuestions(questionCount);
  // Update the display to show the current question number
  questionCounter(questionId);
  // Update the display to show the user's current score
  headerScore();
};

// 5. goHomeBtn (this is the button that apears next to the tryAgainBtn and this will allowed you after you answer to the las question to go back to the home page. If u press this button, it will popup the .home and the quizSection, nextBtn and resultBox will be removed automatically)
goHomeBtn.onclick = () => {
  quizSection.classList.remove("active");
  nextBtn.classList.remove("active");
  resultBox.classList.remove("active");

  questionCount = 0; // Reset the index of current question
  questionId = 1; // Reset the current question number
  userScore = 0; // Reset the user's score to 0
  showQuestions(questionCount);
  questionCounter(questionId);
};

let questionCount = 0;
let questionId = 1;
let userScore = 0;

// 6. nextBtn (this button will be activ after you will choose your option and by clicking this button will show you another question, deleting from the array the previous question and if are no more question to display, it will popup the showResultBox())
nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);

    questionId++;
    questionCounter(questionId);

    nextBtn.classList.remove("active");
  } else {
    showResultBox();
  }
};

// Getting question and options from array
function showQuestions(index) {
  const questionText = document.querySelector(".question-text");
  questionText.textContent = ` ${questions[index].question}`; // Update the question text content with the current question
  // Generate HTML for the options using a tamplate literal
  let optionTag = `
  <div class="option"><span>${questions[index].options[0]}</span></div>
  <div class="option"><span>${questions[index].options[1]}</span></div>
  <div class="option"><span>${questions[index].options[2]}</span></div>
  <div class="option"><span>${questions[index].options[3]}</span></div>
  `;

  // Update the innerHTML of the optionList element with the generated HTML
  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll(".option");
  // Assign a click event to each option, calling the optionSelected function with the selected option as an argument
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

// Function to handle option selection
function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;
  let allOptions = optionList.children.length;

  if (userAnswer == correctAnswer) {
    // Mark the selected option as correct and update the score
    answer.classList.add("correct");
    userScore += 1;
    headerScore();
  } else {
    // Mark the select option as incorect, and the score will be the same
    answer.classList.add("incorrect");

    // Mark the selected option as incorrect and to know what option is corect, the app will highlight the correct answer for you
    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent == correctAnswer) {
        optionList.children[i].setAttribute("class", "option correct");
      }
    }
  }

  // This for is used for disable automatically all option after you choose one and will make the nextBtn active to let you move to the next question
  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled");
  }

  nextBtn.classList.add("active"); // Here is where the next button it will become activ
}

// Function to update the question counter
function questionCounter(index) {
  const questionTotal = document.querySelector(".question-total");
  questionTotal.textContent = `${index} of ${questions.length} Questions`;
}

// Function to update the header with the current score, using userScore amd questions.length, we can display in .header-score the real and real-time user score
function headerScore() {
  const headerScoreText = document.querySelector(".header-score");
  headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

// Function to display the result box with the user's final score:
function showResultBox() {
  // 1. Hide the quiz box and will dispay the result box
  quizBox.classList.remove("active");
  resultBox.classList.add("active");

  // 2. Select the DOM element for displaying the score
  const scoreText = document.querySelector(".score-text");
  // 3. Update the score text content with the user's final score and total number of questions
  scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;

  // 4. Select DOM elements for circular progress animation
  const circularProgress = document.querySelector(".circular-progress");
  const progressValue = document.querySelector(".progress-value");
  // 5. Initialize variables for the progress animation
  let progressStartValue = -1;
  let progressEndValue = (userScore / questions.length) * 100;
  let speed = 20;

  // Set up an interval to animate the circular progress bar
  let progress = setInterval(() => {
    // Increment the progress value
    progressStartValue++;

    // Update the progress value text content
    progressValue.textContent = `${progressStartValue}%`;
    // Update the background of the circular progress bar with a conic gradient
    circularProgress.style.background = `conic-gradient(#fcc71e ${
      progressStartValue * 3.6
    }deg, rgba(255, 255, 255, .1) 0deg)`;
    // Check if the animation has reached the target progress value
    if (progressStartValue >= progressEndValue) {
      // Stop the interval when the target progress is reached
      clearInterval(progress);
    }
  }, speed);
}
