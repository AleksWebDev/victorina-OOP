class Question{
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
    let num = getRandomQuestion(0, arrayQuest.length - 1);
    askQuestion(arrayQuest[num], arrayQuest, num);
})

function getRandomQuestion(min, max){
    return Math.floor(Math.random() * (max - min + 1))  + min;
}

function askQuestion(quest, arrayQuest, num){
    let data = quest.quest;
    let answer;
    switch (data.num){
        case 1:{
            question(data.answers);
            answer = prompt(data.question)
            console.log(answer)
            checkAnswer(data.rightAnswer, Number(answer))
            break;
        };
        case 2:{
            question(data.answers);
            answer = prompt(data.question)
            console.log(answer)
            console.log(data.rightAnswer)
            checkAnswer(data.rightAnswer, Number(answer))
            break;
        };
        case 3:{
            question(data.answers);
            answer = prompt(data.question)
            console.log(answer)
            console.log(data.rightAnswer)
            checkAnswer(data.rightAnswer, Number(answer))
            break;
        };
    }


    function question(dataAnswers){
        for(let key in dataAnswers){
            console.log(`${key} : ${data.answers[key]}`)
        }
    }

    function checkAnswer(answer, correctAnswer){
        if(answer === correctAnswer){
            console.log('Congratulation, you gave the correct answer!!!')
        }else{
            console.log('Inccorect, Try again!!!')
        }
    }
    
}

