// Quiz Functionality
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

    // Provide detailed feedback
    if (score === 3) {
        feedback.innerHTML = "Excellent! You have a strong understanding of ethics.";
    } else if (score === 2) {
        feedback.innerHTML = "Good job! A little more study and you'll master ethics.";
    } else {
        feedback.innerHTML = "Keep learning! Ethics is fundamental to responsible decision-making.";
    }

    // Show result
    resultDiv.style.display = 'block';
    // Scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// Removed Contact Form Validation since Contact section is removed

// Back to Top Button Functionality
const backToTopButton = document.getElementById('back-to-top');

// Show button when scrolled down 300px
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
        backToTopButton.style.opacity = '1';
    } else {
        backToTopButton.style.display = 'none';
        backToTopButton.style.opacity = '0';
    }
});

// Scroll to top when button is clicked
if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Dark Mode Toggle Functionality
const toggleButton = document.getElementById('dark-mode-toggle');

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Change button icon based on mode
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = '☀️';
        } else {
            toggleButton.textContent = '🌙';
        }
    });
}

// Optional: Smooth Scrolling for Navigation Links (if not using CSS 'scroll-behavior: smooth;')
// Uncomment the following code if you prefer JavaScript-based smooth scrolling

/*
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
*/

// Optional: Intersection Observer for Fade-In Animations (if desired)
// Uncomment the following code to enable fade-in animations when sections come into view

/*
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
*/
