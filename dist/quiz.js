"use strict";
const nextBtn = document.querySelector(".btn");
const quiz_question = document.querySelector("#quiz_question");
const questionHtml = document.querySelector(".question");
const previous_btn = document.querySelector(".previous_btn");
const quiz_result = document.querySelector("#quiz_result");
const quiz_container = document.querySelector(".quiz-container");
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome", "Lisbon"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Jane Austen", "J.K. Rowling", "Mark Twain", "Charles Dickens"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean", "Southern Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "In what year did the Titanic sink?",
        options: ["1912", "1905", "1923", "1898", "1915"],
        correctAnswer: "1912"
    }
];
let quizQuestionsIndex = 0;
let rightAnswer = 0;
let wrongAnswer = 0;
renderQuiz();
function renderQuiz() {
    questionHtml.innerHTML = "";
    if (quizQuestionsIndex === quizQuestions.length) {
        quiz_result.style.display = "block";
        quiz_container.style.display = "none";
        quiz_result.innerHTML = `<h1> ${rightAnswer > wrongAnswer ? 'You Win' : 'You Lose'} </h1>
    <h3>Right Answer ${rightAnswer}</h3> <h3>Wrong Answer ${wrongAnswer}</h3> <button onclick="reload_quiz()">Reload Quiz</button>`;
    }
    else {
        const question = quizQuestions[quizQuestionsIndex];
        quiz_question.innerText = `${quizQuestionsIndex + 1}) ${question.question}`;
        const allOption = question.options.map((data) => {
            return `<label> <input type="radio" name="question-${quizQuestionsIndex}" value="${data}"><span>${data}</span></label>`;
        }).join(""); // Join the array into a single string
        questionHtml.innerHTML += allOption;
        nextBtn.innerText = quizQuestionsIndex === quizQuestions.length - 1 ? "Submit" : "Next";
    }
    previous_btn.disabled = quizQuestionsIndex <= 0;
}
nextBtn.addEventListener("click", () => {
    const selected = document.querySelector(`input[name = question-${quizQuestionsIndex}]:checked`);
    // console.log("selected", selected, selected.value);
    // console.log( "selected" , selected ,selected.value)
    if (selected) {
        if (selected.value == quizQuestions[quizQuestionsIndex].correctAnswer) {
            rightAnswer++;
        }
        else {
            wrongAnswer++;
        }
        quizQuestionsIndex++;
        renderQuiz();
    }
    else {
        alert("Please Choose Answer");
    }
});
previous_btn.disabled = true;
previous_btn.addEventListener("click", () => {
    quizQuestionsIndex--;
    renderQuiz();
});
console.log(quizQuestionsIndex);
function reload_quiz() {
    window.location.reload();
}
