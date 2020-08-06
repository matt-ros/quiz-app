const STORE = [
    {question: 'What year was the Reinheitsgebot (German beer purity law) enacted?',
    options: ['1247', '1516', '1776', '1902'],
    answer: '1516'
    },

    {question: 'What does IPA stand for?',
    options: ['Italian Pasta Alcohol', 'International Pale Ale', 'India Pale Ale', 'Infinitely Palatable Aroma'],
    answer: 'India Pale Ale'
    },

    {question: 'Which style of beer is Guinness best known for?',
    options: ['Stout', 'Amber', 'IPA', 'Blonde'],
    answer: 'Stout'
    },

    {question: 'Which of these is NOT one of the 4 basic ingredients of beer?',
    options: ['Water', 'Yeast', 'Wheat', 'Hops'],
    answer: 'Wheat'
    },

    {question: 'While brewing beer, the process of fermentation turns sugar into alcohol and what else?',
    options: ['Oxygen', 'Methane', 'Hydrogen', 'Carbon dioxide'],
    answer: 'Carbon dioxide'
    },

    {question: 'What do hops contribute to beer?',
    options: ['Bitterness', 'Preservative properties', 'Fruit flavors', 'All of the above'],
    answer: 'All of the above'
    },

    {question: 'When is Germany\'s famous beer festival?',
    options: ['October', 'June', 'September', 'March'],
    answer: 'October'
    },

    {question: 'In which country is the world\'s oldest brewery still in operation?',
    options: ['Ireland', 'Germany', 'Belgium', 'Czech Republic'],
    answer: 'Germany'
    },

    {question: 'What is the oldest brewery in the United States?',
    options: ['Yuengling', 'Samuel Adams', 'Pabst', 'Anheuser-Busch'],
    answer: 'Yuengling'
    },

    {question: 'Which country consumes the most beer per capita?',
    options: ['China', 'United States', 'Czech Republic', 'Russia'],
    answer: 'Czech Republic'
    },
]

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    $('.main-box').on('click', '#start-button', event => {
        $('.js-question').html(`<p>Question ${currentQuestion+1}/${STORE.length}</p>`);
        $('.js-score').html(`<p>Score: ${score}`);
        generateQuestion();
    });
}

function generateOptions() {
    for (let i=0; i < STORE[currentQuestion].options.length; i++) {
        $('.main-box form').append(`<input name="option" type="radio" id="${STORE[currentQuestion].options[i]}" value="${STORE[currentQuestion].options[i]}" required>
        <label for="${STORE[currentQuestion].options[i]}">${STORE[currentQuestion].options[i]}</label><br><br>`);
    }
    $('.main-box form').append('<button id="submit-button" type="submit">Submit</button>');
}

function generateQuestion() {    
    $('.main-box').html(`<form>
    <h2>${STORE[currentQuestion].question}</h2>
    </form>`);
    generateOptions();
}

function correctAnswer() {
    $('.main-box').html('<h3>Correct!</h3><input id="next-button" type="button" value="Next Question">');
    score++;
    $('.js-score').html(`<p>Score: ${score}`);
}

function incorrectAnswer() {
    $('.main-box').html(`<h3>Incorrect! The correct answer was ${STORE[currentQuestion].answer}</h3><input id="next-button" type="button" value="Next Question">`);
}

function submitAnswer() {
    $('.main-box').on('click', '#submit-button', event => {
        event.preventDefault();
        let userAnswer = $('input:checked').val();
        if (userAnswer === undefined) {
            alert('Please choose an answer');
        }
        else if (userAnswer === STORE[currentQuestion].answer) {
            correctAnswer();
        }
        else {
            incorrectAnswer();
        }
    });
}

function displayResults() {
    $('.main-box').html(`<h3>Score: ${score}/${STORE.length}</h3>`);
    if (score/STORE.length >= 0.7) {
        $('.main-box').append('<p>Great job!</p><img src="./images/cheers.jpg" alt="Two mugs of beer clinking together for a toast"><br><input id="restart-button" type="button" value="Start Over">');
    }
    else {
        $('.main-box').append('<p>Better luck next time!</p><img src="./images/spill.jpg" alt="Man in leather jacket pouring can of beer on his face"><br><input id="restart-button" type="button" value="Start Over">');
    }
}

function nextQuestion() {
    $('.main-box').on('click', '#next-button', event => {
        currentQuestion++;
        if (currentQuestion < STORE.length) {
            $('.js-question').html(`<p>Question ${currentQuestion+1}/${STORE.length}</p>`);
            generateQuestion();
        }
        else {
            displayResults();
        }
    });
}

function restartQuiz() {
    $('.main-box').on('click', '#restart-button', event => {
        currentQuestion = 0;
        score = 0;
        $('.js-question').html(`<p>Question ${currentQuestion+1}/${STORE.length}</p>`);
        $('.js-score').html(`<p>Score: ${score}`);
        generateQuestion();
    });
}

function handleQuiz() {
    startQuiz();
    submitAnswer();
    nextQuestion();
    restartQuiz();
}

$(handleQuiz);