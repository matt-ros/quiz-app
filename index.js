function startQuiz() {
    $('.main-box').on('click', '#start-button', event => {
        console.log('Start Quiz has been called');
        generateQuestion();
    });
}

function generateQuestion() {
    console.log('Generate Question has been called');
}

function submitAnswer() {
    console.log('Submit Answer has been called');
}

function nextQuestion() {
    console.log('Next Question has been called');
}

function restartQuiz() {
    console.log('Restart Quiz has been called');
}

function handleQuiz() {
    startQuiz();
    generateQuestion();
    submitAnswer();
    nextQuestion();
    restartQuiz();
}

$(handleQuiz);