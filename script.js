const questions = [
    {
        question: "What is the past form of 'run'?",
        answers: ["runned", "ran", "run", "runs"],
        correctAnswer: 1
    },
    {
        question: "What is the past form of 'go'?",
        answers: ["went", "goes", "gone", "goed"],
        correctAnswer: 0
    },
    {
        question: "What is the past form of 'eat'?",
        answers: ["ate", "eaten", "eats", "eating"],
        correctAnswer: 0
    },
    {
        question: "What is the past form of 'speak'?",
        answers: ["spoke", "speaked", "speaked", "spoken"],
        correctAnswer: 0
    },
    {
        question: "What is the past form of 'drive'?",
        answers: ["drove", "drived", "driven", "drives"],
        correctAnswer: 0
    },
    {
        question: "What is the past form of 'write'?",
        answers: ["wrote", "written", "writing", "writes"],
        correctAnswer: 0
    },
    {
        question: "What is the past form of 'sing'?",
        answers: ["sang", "sung", "singed", "sings"],
        correctAnswer: 0
    },
    {
        question: "What is the past form of 'swim'?",
        answers: ["swimmed", "swam", "swum", "swims"],
        correctAnswer: 1
    },
    {
        question: "What is the past form of 'go'?",
        answers: ["goes", "went", "gone", "going"],
        correctAnswer: 1
    },
    {
        question: "What is the past form of 'read' (present tense is 'read')?",
        answers: ["read", "reed", "red", "readed"],
        correctAnswer: 2
    },
    {
        question: "What is the past form of 'buy'?",
        answers: ["bought", "buyed", "boughten", "buys"],
        correctAnswer: 0
    },
    {
        question: "What is the past form of 'speak'?",
        answers: ["speaked", "spoke", "spoken", "speaks"],
        correctAnswer: 1
    },
    {
        question: "What is the past form of 'understand'?",
        answers: ["understood", "understands", "understanded", "understand"],
        correctAnswer: 0
    },
    {
        question: "What is the past form of 'come'?",
        answers: ["come", "comed", "came", "comes"],
        correctAnswer: 2
    },
    {
        question: "What is the past form of 'have'?",
        answers: ["has", "had", "haved", "have"],
        correctAnswer: 1
    },
    {
        question: "What is the past form of 'take'?",
        answers: ["take", "took", "taken", "takes"],
        correctAnswer: 1
    },
    {
        question: "What is the past form of 'make'?",
        answers: ["made", "make", "maked", "making"],
        correctAnswer: 0
    },
    {
        question: "What is the past form of 'meet'?",
        answers: ["meet", "met", "meeted", "meets"],
        correctAnswer: 1
    },
    {
        question: "What is the past form of 'sleep'?",
        answers: ["slept", "sleeped", "sleeping", "sleeps"],
        correctAnswer: 0
    },
    {
        question: "What is the past form of 'begin'?",
        answers: ["began", "beginned", "begun", "become"],
        correctAnswer: 0
    },
    {
        question: "What is the past form of 'bring'?",
        answers: ["brought", "bringed", "broughten", "brings"],
        correctAnswer: 0
    }
];

// Inisialisasi game
let currentQuestionIndex = 0;
let score = 0;
let lives = 3;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const scoreElement = document.getElementById("score");
const livesElement = document.getElementById("lives");
const gameOverElement = document.getElementById("game-over");
const backgroundMusic = document.getElementById("background-music");

// Memulai musik
backgroundMusic.play();

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

function updateLives() {
    livesElement.textContent = `Lives: ${lives}`;
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = "";
    
    currentQuestion.answers.forEach((answer, index) => {
        const answerButton = document.createElement("button");
        answerButton.textContent = answer;
        answerButton.classList.add("answer-btn");
        answerButton.addEventListener("click", () => checkAnswer(index));
        answersElement.appendChild(answerButton);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
        updateScore();
    } else {
        lives--;
        updateLives();
    }

    currentQuestionIndex++;

    if (lives <= 0) {
        gameOver();
    } else if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        gameOver();
    }
}

function gameOver() {
    questionElement.textContent = "";
    answersElement.innerHTML = "";
    gameOverElement.textContent = `Game Over! Your score is: ${score}`;
    gameOverElement.style.display = "block";
}

displayQuestion();
