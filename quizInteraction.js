const quiz = document.getElementById('quiz');
const submit = document.getElementById('submit');
const results = document.getElementById('results');

// use array of object literals to hold questions, answers, and correct answer
const questions = [
    {
        question: 'Which famous author, whose real name is Samuel Clements, was born in Connecticut?',
        answers : {
            a : 'Virginia Woolf',
            b : 'James Patterson',
            c : 'Ian Fleming',
            d : 'Mark Twain' 
        },
        correctAnswer: 'd'
    },
    {
        question: 'Which corner of Connecticut is home to Mystic Pizza?',
        answers : {
            a : 'Northwest',
            b : 'Northeast',
            c : 'Southeast',
            d : 'Southwest' 
        },
        correctAnswer: 'c'
    },
    {
        question: 'What was the maximum speed listed in the first ever automobile law, passed in Connecticut in 1901?',
        answers : {
            a : '10 mph',
            b : '12 mph',
            c : '14 mph',
            d : '16 mph' 
        },
        correctAnswer: 'b'
    },
    {
        question: 'Which famous reference book was founded in Connecticut?',
        answers : {
            a : 'Oxford English Dictionary in Oxford',
            b : 'Webster Dictionary in New Haven',
            c : 'Collins Dictionary in Hartford',
            d : 'Rand-McNally Atlas in New London' 
        },
        correctAnswer: 'b'
    }
];

function buildQuiz() {
    output = [];

    // use Array.forEach function to create lambda function for iterating through array
    questions.forEach( 
        (currentQuestion, questionNumber) => {
        
            const answerOutput = [];

            // iterate through object literal values in each question
            // and add HTML radio button
            for (letter in currentQuestion.answers) {
                answerOutput.push(
                    `<label>
                        <input type='radio' name='question${questionNumber}' value='${letter}'>
                            ${letter} : ${currentQuestion.answers[letter]}
                        </input>
                    </label><br>`
                );
            }

            // add question to output array
            output.push(
                `<div class='question'>${currentQuestion.question}</div>
                <div class='answer'>${answerOutput.join('')}</div>`
            );
        }
    );

    // change inner HTML of quiz container by joining output array
    quiz.innerHTML = output.join('');
};

function submitQuiz() {};

buildQuiz();

submit.addEventListener('click', submitQuiz);

