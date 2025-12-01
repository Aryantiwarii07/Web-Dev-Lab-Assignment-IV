// Simple JavaScript Quiz Game
// Developed by: Aryan Tiwari

const quizQuestions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "Which programming language is used for web styling? (HTML / CSS / JS)", answer: "css" },
    { question: "What keyword is used to declare a variable in JavaScript?", answer: "let" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What does RAM stand for?", answer: "random access memory" }
];

function runQuiz() {
    let score = 0;
    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);
        userAnswer = userAnswer.toLowerCase().trim();
        if (userAnswer === quizQuestions[i].answer) {
            alert("Correct! 🎉");
            score++;
        } else {
            alert("Incorrect ❌\nCorrect Answer: " + quizQuestions[i].answer);
        }
    }
    alert("Quiz Completed!\nYour Score: " + score + " / " + quizQuestions.length);
}

runQuiz();