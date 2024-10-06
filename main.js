/* class Question{
    constructor(quest){
        this.quest = quest;
    }
}

let arrayQuest = [
    new Question({
        num: 1,
        question: 'JS is the best programm lenguage?',
        answers: {
            1: 'yes',
            2: 'no',
            3: 'I don"t know, show me the answer'
        },
        rightAnswer: 1
    }),

    new Question({
        num: 2,
        question: 'Where may be used JS?',
        answers: {
            1: 'front-end',
            2: 'back-end',
            3: 'both answer are right'
        },
        rightAnswer: 3
    }),

    new Question({
        num: 3,
        question: 'Front-end is a cliend side of the webdeveloping?',
        answers: {
            1: 'yes',
            2: 'no',
            3: 'both answer are right'
        },
        rightAnswer: 1
    })
]

window.addEventListener('DOMContentLoaded', function(){
    initGame()
})

function initGame(){
    let num = getRandomQuestion(0, arrayQuest.length - 1);
    askQuestion(arrayQuest[num]);
}

function getRandomQuestion(min, max){
    return Math.floor(Math.random() * (max - min + 1))  + min;
}

function askQuestion(quest){
    let data = quest.quest;
    let answer;
    let score = 0;
    let res;
    switch (data.num){
        case 1:{
            console.log(data.question)
            question(data.answers);
            answer = prompt(data.question)
            console.log(answer)
            res = checkAnswer(data.rightAnswer, Number(answer), score)
            console.log(`Score: ${res}`)
            initGame()
            break;
        };
        case 2:{
            console.log(data.question)
            question(data.answers);
            answer = prompt(data.question)
            console.log(answer)
            res = checkAnswer(data.rightAnswer, Number(answer), score)
            console.log(`Score: ${res}`)
            initGame()
            break;
        };
        case 3:{
            console.log(data.question)
            question(data.answers);
            answer = prompt(data.question)
            console.log(answer)
            res = checkAnswer(data.rightAnswer, Number(answer), score)
            console.log(`Score: ${res}`)
            initGame()
            break;
        };
    }


    function question(dataAnswers){
        for(let key in dataAnswers){
            console.log(`${key} : ${data.answers[key]}`)
        }
    }

    function checkAnswer(answer, correctAnswer, score){
        if(answer === correctAnswer){
            console.log(`Wictory, you gave the correct answer!!!`)
            score++
            return score;
        }else{
            console.log('Inccorect, Try again!!!')
        }
    }
    
} */

