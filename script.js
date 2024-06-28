const quizContainer = document.getElementById("quiz");

const submitBtn = document.getElementById("submit");

// Variables to store quiz data from api, current question, index, and score
let quizData = [];
let currentQuiz = 0;
let score = 0;

// Function to fetch quiz data from the api

async function fetchQuizData() {
  try {
    //Fetch data from the db
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"
    );
    const data = await response.json();

    //manipulate the quiz data
    quizData = data.results.map((item) => ({
      question: item.question,
      answers: [...item.incorrect_answers, item.correct_answer],
      correct: item.correct_answer,
    }));

    // Shuffle the answers for each question
    quizData.forEach((q) => (q.answers = shuffleArray(q.answers)));

    // Load the first question
    loadQuiz();
  } catch (error) {
    console.error("Error Fetching data:", error);
  }
}
