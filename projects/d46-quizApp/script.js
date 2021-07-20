const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
];

let currentQuiz = 0;
let score = 0;

loadQuiz();

// This manipulates the DOM for quiz, uses quizData for it.
function loadQuiz() {
  // Clear answers for question
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  // Manipulate the DOM
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// Deselects all answers for new question
function deselectAnswers() {
  answerEls.forEach((answer) => (answer.checked = false));
}

// Takes user's answer for the question
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    // If users answer is correct increment the score
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    // Load quiz until the end of the quizData array
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
         <h2>Your score is ${
           score * 25
         }, ${score} questions correctly answered. </h2>
         <button onclick="location.reload()">Reload</button>
        `;
    }
  }
});
