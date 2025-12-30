// Quiz Application State
let quizState = {
    username: '',
    category: '',
    difficulty: '',
    questions: [],
    currentQuestion: 0,
    answers: [],
    timePerQuestion: [],
    questionStartTime: 0,
    timerInterval: null,
    timeLimit: 30,
    totalTime: 0
};

// DOM Elements
const landingPage = document.getElementById('landing-page');
const quizPage = document.getElementById('quiz-page');
const resultsPage = document.getElementById('results-page');

const categorySelect = document.getElementById('category');
const difficultySelect = document.getElementById('difficulty');
const usernameInput = document.getElementById('username');
const startQuizBtn = document.getElementById('start-quiz-btn');

const categoryDisplay = document.getElementById('category-display');
const difficultyDisplay = document.getElementById('difficulty-display');
const timerElement = document.getElementById('timer');
const progressBar = document.getElementById('progress');
const questionNav = document.getElementById('question-nav');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');

// Time limits based on difficulty
const timeLimits = {
    easy: 30,
    medium: 20,
    hard: 15
};

// Initialize the application
function init() {
    startQuizBtn.addEventListener('click', startQuiz);
    prevBtn.addEventListener('click', previousQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    submitBtn.addEventListener('click', submitQuiz);
    restartBtn.addEventListener('click', restartQuiz);
    
    showPage('landing');
}

// Show specific page
function showPage(page) {
    landingPage.classList.add('hidden');
    quizPage.classList.add('hidden');
    resultsPage.classList.add('hidden');
    
    if (page === 'landing') {
        landingPage.classList.remove('hidden');
    } else if (page === 'quiz') {
        quizPage.classList.remove('hidden');
    } else if (page === 'results') {
        resultsPage.classList.remove('hidden');
    }
}

// Start the quiz
function startQuiz() {
    const username = usernameInput.value.trim();
    if (!username) {
        alert('Please enter your name!');
        return;
    }
    
    quizState.username = username;
    quizState.category = categorySelect.value;
    quizState.difficulty = difficultySelect.value;
    quizState.timeLimit = timeLimits[quizState.difficulty];
    quizState.questions = getQuestions(quizState.category, quizState.difficulty);
    quizState.currentQuestion = 0;
    quizState.answers = new Array(quizState.questions.length).fill(null);
    quizState.timePerQuestion = new Array(quizState.questions.length).fill(0);
    quizState.totalTime = 0;
    
    // Update display info
    categoryDisplay.textContent = categorySelect.options[categorySelect.selectedIndex].text;
    difficultyDisplay.textContent = difficultySelect.options[difficultySelect.selectedIndex].text;
    
    // Create question navigation buttons
    createQuestionNav();
    
    showPage('quiz');
    loadQuestion();
}

// Create question navigation buttons
function createQuestionNav() {
    questionNav.innerHTML = '';
    quizState.questions.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.textContent = index + 1;
        btn.className = 'w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-gray-200 bg-white font-semibold transition-all hover:border-indigo-400';
        btn.addEventListener('click', () => goToQuestion(index));
        questionNav.appendChild(btn);
    });
    updateQuestionNav();
}

// Update question navigation styling
function updateQuestionNav() {
    const buttons = questionNav.querySelectorAll('button');
    buttons.forEach((btn, index) => {
        btn.classList.remove('border-indigo-500', 'bg-indigo-500', 'text-white', 'border-emerald-500', 'bg-emerald-50', 'text-emerald-600', 'bg-emerald-500');
        
        if (index === quizState.currentQuestion) {
            if (quizState.answers[index] !== null) {
                btn.classList.add('border-emerald-500', 'bg-emerald-500', 'text-white');
            } else {
                btn.classList.add('border-indigo-500', 'bg-indigo-500', 'text-white');
            }
        } else if (quizState.answers[index] !== null) {
            btn.classList.add('border-emerald-500', 'bg-emerald-50', 'text-emerald-600');
        }
    });
}

// Go to specific question
function goToQuestion(index) {
    saveCurrentTime();
    quizState.currentQuestion = index;
    loadQuestion();
}

// Load current question
function loadQuestion() {
    const question = quizState.questions[quizState.currentQuestion];
    const total = quizState.questions.length;
    const current = quizState.currentQuestion + 1;
    
    questionNumber.textContent = `Question ${current} of ${total}`;
    questionText.textContent = question.question;
    
    // Update progress bar
    progressBar.style.width = `${(current / total) * 100}%`;
    
    // Load options
    optionsContainer.innerHTML = '';
    const labels = ['A', 'B', 'C', 'D'];
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = `flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer transition-all hover:border-indigo-400 hover:bg-indigo-50 ${quizState.answers[quizState.currentQuestion] === index ? 'border-indigo-500 bg-gradient-to-r from-indigo-500 to-purple-600 text-white' : ''}`;
        optionDiv.innerHTML = `
            <span class="w-8 h-8 rounded-full ${quizState.answers[quizState.currentQuestion] === index ? 'bg-white/30' : 'bg-gray-100'} flex items-center justify-center mr-4 font-semibold">${labels[index]}</span>
            <span>${option}</span>
        `;
        optionDiv.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionDiv);
    });
    
    // Update navigation buttons
    prevBtn.disabled = quizState.currentQuestion === 0;
    
    if (quizState.currentQuestion === total - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
    
    updateQuestionNav();
    startTimer();
}

// Select an option
function selectOption(index) {
    quizState.answers[quizState.currentQuestion] = index;
    loadQuestion();
}

// Start timer for current question
function startTimer() {
    clearInterval(quizState.timerInterval);
    quizState.questionStartTime = Date.now();
    
    let timeLeft = quizState.timeLimit;
    timerElement.textContent = timeLeft;
    timerElement.classList.remove('bg-gradient-to-r', 'from-red-500', 'to-pink-500', 'timer-warning');
    timerElement.classList.add('bg-gradient-to-r', 'from-indigo-500', 'to-purple-600');
    
    quizState.timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        
        if (timeLeft <= 5) {
            timerElement.classList.remove('from-indigo-500', 'to-purple-600');
            timerElement.classList.add('from-red-500', 'to-pink-500', 'timer-warning');
        }
        
        if (timeLeft <= 0) {
            clearInterval(quizState.timerInterval);
            autoSubmitQuestion();
        }
    }, 1000);
}

// Save time spent on current question
function saveCurrentTime() {
    const timeSpent = Math.round((Date.now() - quizState.questionStartTime) / 1000);
    quizState.timePerQuestion[quizState.currentQuestion] += timeSpent;
    quizState.totalTime += timeSpent;
}

// Auto submit when timer runs out
function autoSubmitQuestion() {
    saveCurrentTime();
    
    if (quizState.currentQuestion < quizState.questions.length - 1) {
        quizState.currentQuestion++;
        loadQuestion();
    } else {
        submitQuiz();
    }
}

// Previous question
function previousQuestion() {
    if (quizState.currentQuestion > 0) {
        saveCurrentTime();
        quizState.currentQuestion--;
        loadQuestion();
    }
}

// Next question
function nextQuestion() {
    if (quizState.currentQuestion < quizState.questions.length - 1) {
        saveCurrentTime();
        quizState.currentQuestion++;
        loadQuestion();
    }
}

// Submit quiz
function submitQuiz() {
    saveCurrentTime();
    clearInterval(quizState.timerInterval);
    
    calculateResults();
    showPage('results');
}

// Calculate and display results
function calculateResults() {
    let correct = 0;
    let incorrect = 0;
    
    quizState.questions.forEach((question, index) => {
        if (quizState.answers[index] === question.answer) {
            correct++;
        } else {
            incorrect++;
        }
    });
    
    const total = quizState.questions.length;
    const percentage = Math.round((correct / total) * 100);
    
    // Update result elements
    document.getElementById('user-result-name').textContent = `Results for ${quizState.username}`;
    document.getElementById('score-percentage').textContent = `${percentage}%`;
    document.getElementById('total-questions').textContent = total;
    document.getElementById('correct-answers').textContent = correct;
    document.getElementById('incorrect-answers').textContent = incorrect;
    document.getElementById('total-time').textContent = quizState.totalTime;
    
    // Update score circle color based on performance
    const scoreCircle = document.getElementById('score-circle');
    scoreCircle.classList.remove('from-red-500', 'to-pink-500', 'from-yellow-500', 'to-orange-500', 'from-emerald-500', 'to-green-500');
    
    if (percentage >= 70) {
        scoreCircle.classList.add('from-emerald-500', 'to-green-500');
    } else if (percentage >= 40) {
        scoreCircle.classList.add('from-yellow-500', 'to-orange-500');
    } else {
        scoreCircle.classList.add('from-red-500', 'to-pink-500');
    }
    
    // Create charts
    createScoreChart(correct, incorrect);
    createTimeChart();
    
    // Create detailed analysis
    createDetailedAnalysis();
}

// Create score distribution chart
function createScoreChart(correct, incorrect) {
    const ctx = document.getElementById('scoreChart').getContext('2d');
    
    // Destroy existing chart if any
    if (window.scoreChartInstance) {
        window.scoreChartInstance.destroy();
    }
    
    window.scoreChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                data: [correct, incorrect],
                backgroundColor: ['#10b981', '#ef4444'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// Create time per question chart
function createTimeChart() {
    const ctx = document.getElementById('timeChart').getContext('2d');
    
    // Destroy existing chart if any
    if (window.timeChartInstance) {
        window.timeChartInstance.destroy();
    }
    
    const labels = quizState.questions.map((_, i) => `Q${i + 1}`);
    const colors = quizState.questions.map((q, i) => 
        quizState.answers[i] === q.answer ? '#10b981' : '#ef4444'
    );
    
    window.timeChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Time (seconds)',
                data: quizState.timePerQuestion,
                backgroundColor: colors,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Seconds'
                    }
                }
            }
        }
    });
}

// Create detailed question analysis
function createDetailedAnalysis() {
    const container = document.getElementById('question-analysis');
    container.innerHTML = '';
    
    quizState.questions.forEach((question, index) => {
        const isCorrect = quizState.answers[index] === question.answer;
        const userAnswer = quizState.answers[index] !== null ? question.options[quizState.answers[index]] : 'Not answered';
        const correctAnswer = question.options[question.answer];
        
        const div = document.createElement('div');
        div.className = `p-4 rounded-xl border-l-4 ${isCorrect ? 'border-emerald-500 bg-emerald-50' : 'border-red-500 bg-red-50'}`;
        div.innerHTML = `
            <div class="flex flex-wrap justify-between gap-2 mb-2">
                <span class="font-semibold text-gray-700">Question ${index + 1}</span>
                <span class="text-sm text-gray-500">Time: ${quizState.timePerQuestion[index]}s</span>
            </div>
            <p class="text-gray-600 mb-2">${question.question}</p>
            <div class="text-sm">
                <p class="${isCorrect ? 'text-emerald-600' : 'text-red-500'}">
                    <strong>Your Answer:</strong> ${userAnswer} ${isCorrect ? '✓' : '✗'}
                </p>
                ${!isCorrect ? `<p class="text-emerald-600"><strong>Correct Answer:</strong> ${correctAnswer}</p>` : ''}
            </div>
        `;
        container.appendChild(div);
    });
}

// Restart quiz
function restartQuiz() {
    usernameInput.value = '';
    showPage('landing');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
