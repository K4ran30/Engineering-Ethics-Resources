// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Remove loading indicator after page loads
    const loading = document.getElementById('loading');
    loading.style.display = 'none';
});

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

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If validation passes
    alert('Thank you for your message! We will get back to you shortly.');
    this.reset();
});

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
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dark Mode Toggle Functionality
const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Change button icon based on mode
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️';
    } else {
        toggleButton.textContent = '🌙';
    }
});

// Smooth Scrolling for Navigation Links (optional if CSS 'scroll-behavior: smooth;' is used)
/*
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
*/

// Optional: Intersection Observer for Fade-In Animations (if desired)
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
