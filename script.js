// script.js

// Function to handle quiz submission
function submitQuiz() {
    const totalQuestions = 8;
    let score = 0;
    let answeredQuestions = 0;

    // Define correct answers
    const answers = {
        q1: 'b',
        q2: 'b',
        q3: 'b',
        q4: 'b',
        q5: 'a',
        q6: 'a',
        q7: 'b',
        q8: 'b'
    };

    // Iterate through each question
    for(let i = 1; i <= totalQuestions; i++) {
        const userAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if(userAnswer) {
            answeredQuestions++;
            if(userAnswer.value === answers[`q${i}`]) {
                score++;
            }
        }
    }

    // Check if all questions are answered
    if(answeredQuestions < totalQuestions) {
        alert("Please answer all questions before submitting the quiz.");
        return;
    }

    // Display result
    const resultDiv = document.getElementById('quiz-result');
    const scoreSpan = document.getElementById('score');
    const feedbackP = document.getElementById('feedback');

    scoreSpan.textContent = score;

    // Provide feedback based on score
    if(score === totalQuestions) {
        feedbackP.textContent = "Excellent! You have a strong understanding of ethics.";
    } else if(score >= totalQuestions * 0.7) {
        feedbackP.textContent = "Good job! You have a solid grasp of ethical principles.";
    } else if(score >= totalQuestions * 0.4) {
        feedbackP.textContent = "Fair effort. Consider reviewing some ethical concepts.";
    } else {
        feedbackP.textContent = "It seems you might need to study ethics further. Don't worry, keep learning!";
    }

    resultDiv.style.display = 'block';
}

// Function to handle "Take the Quiz" button click
document.addEventListener('DOMContentLoaded', function() {
    const takeQuizButton = document.getElementById('take-quiz-button');
    const quizForm = document.getElementById('quiz-form');

    takeQuizButton.addEventListener('click', function() {
        quizForm.style.display = 'block'; // Show the quiz form
        takeQuizButton.style.display = 'none'; // Hide the "Take the Quiz" button
        // Optionally, scroll to the quiz form
        quizForm.scrollIntoView({ behavior: 'smooth' });
    });
});
