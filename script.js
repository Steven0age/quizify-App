const quizQuestions = [
  {
    id: 1,
    question: "Wie lautet die Hauptstadt von Deutschland?",
    answerA: "Hamburg",
    answerB: "Berlin",
    answerC: "München",
    answerD: "Hannover",
    correctAnswer: "answerB",
  },
  {
    id: 2,
    question: "Wie heißt der höchste Berg der Welt?",
    answerA: "K2",
    answerB: "Mount Everst",
    answerC: "Kilimandscharo",
    answerD: "Mont Blanc",
    correctAnswer: "answerB",
  },
  {
    id: 3,
    question: "Welcher Fluss fließt durch Paris?",
    answerA: "Themse",
    answerB: "Donau",
    answerC: "Seine",
    answerD: "Rhein",
    correctAnswer: "answerC",
  },
  {
    id: 4,
    question: "in welchem Jahr wurdie die Berliner Mauer gebaut?",
    answerA: "1945",
    answerB: "1961",
    answerC: "1989",
    answerD: "1990",
    correctAnswer: "answerB",
  },
  {
    id: 5,
    question: "Welches Tier ist das größte Säugetier der Welt?",
    answerA: "Elefant",
    answerB: "Blauwal",
    answerC: "Giraffe",
    answerD: "Pottwal",
    correctAnswer: "answerB",
  },
  {
    id: 6,
    question: "Wer ist der Regisseur des Films 'Titanic'?",
    answerA: "Steven Spielberg",
    answerB: "James Cameron",
    answerC: "Martin Scorsese",
    answerD: "Christopher Nolan",
    correctAnswer: "answerB",
  },
  {
    id: 7,
    question: "Im welchem Land fanden die Olympischen Spiele 2016 statt?",
    answerA: "China",
    answerB: "Brasilien",
    answerC: "Japan",
    answerD: "Griechenland",
    correctAnswer: "answerB",
  },
  {
    id: 8,
    question: "Wer schrieb den Roman '1984'?",
    answerA: "George Orwell",
    answerB: "Aldous Huxely",
    answerC: "Franz Kafka",
    answerD: "Ernest Hemingway",
    correctAnswer: "answerA",
  },
  {
    id: 9,
    question: "Was bedeutet HTML?",
    answerA: "Hyper Text Markup Language",
    answerB: "High Text Machine Learning",
    answerC: "Hyperlink Tool Markup Language",
    answerD: "Home Tool Markup Language",
    correctAnswer: "answerA",
  },
];
let currentQuestionId = 0;
document.addEventListener("DOMContentLoaded", addQuestionToDOM);

function addQuestionToDOM() {
  const question = document.getElementById("quizQestion");
  question.innerHTML = quizQuestions[currentQuestionId].question;

  const answerA = document.getElementById("answerA");
  answerA.innerHTML = quizQuestions[currentQuestionId].answerA;

  const answerB = document.getElementById("answerB");
  answerB.innerHTML = quizQuestions[currentQuestionId].answerB;

  const answerC = document.getElementById("answerC");
  answerC.innerHTML = quizQuestions[currentQuestionId].answerC;

  const answerD = document.getElementById("answerD");
  answerD.innerHTML = quizQuestions[currentQuestionId].answerD;
}

function nextQuestion() {
  // if (currentQuestionId == quizQuestions.length - 1) {
  //   currentQuestionId = 0;
  // } else {
  //   currentQuestionId += 1;
  // }
  currentQuestionId = Math.floor(Math.random() * (quizQuestions.length - 1));
  addQuestionToDOM();
  resetButtonColor();
}

function clickAnswer(answer) {
  resetButtonColor();
  if (answer === quizQuestions[currentQuestionId].correctAnswer) {
    document.getElementById(`${answer}`).className = "answer-right";
  } else {
    document.getElementById(`${answer}`).className = "answer-wrong";
  }
}

function resetButtonColor() {
  document
    .getElementById("answerA")
    .classList.remove("answer-right", "answer-wrong");
  document
    .getElementById("answerB")
    .classList.remove("answer-right", "answer-wrong");
  document
    .getElementById("answerC")
    .classList.remove("answer-right", "answer-wrong");
  document
    .getElementById("answerD")
    .classList.remove("answer-right", "answer-wrong");
}
function showCorrectAnswer() {
  const correctAnswer = quizQuestions[currentQuestionId].correctAnswer;
  document.getElementById(`${correctAnswer}`).className = "answer-right";
  alert(
    `Die korrekte Antwort lautet: ${quizQuestions[currentQuestionId][correctAnswer]}`
  );
}
