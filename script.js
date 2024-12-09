function submitQuiz() {
    const quizForm = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('quiz-result');
    const scoreSpan = document.getElementById('score');
    const feedback = document.getElementById('feedback');
    let score = 0;

    // Answers
    const answers = {
        q1: 'b',
        q2: 'b',
        q3: 'b'
    };

    // Check each answer
    for (let q in answers) {
        const userAnswer = quizForm[q].value;
        if (userAnswer === answers[q]) {
            score++;
        }
    }

    // Display score
    scoreSpan.textContent = score;

    // Provide feedback
    if (score === 3) {
        feedback.textContent = "Excellent! You have a strong understanding of ethics.";
    } else if (score === 2) {
        feedback.textContent = "Good job! A little more study and you'll master ethics.";
    } else {
        feedback.textContent = "Keep learning! Ethics is fundamental to responsible decision-making.";
    }

    // Show result
    resultDiv.style.display = 'block';
    // Scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}
