

function Question(num, quest, answers, rightAnswer){
    this.score = 0;
    this.num = num;
    this.quest = quest;
    this.answers = answers;
    this.rightAnswer = rightAnswer;
}

let score = 0;

//Создаем массив с вопросами 
let arrayQuestion = [
    new Question(1, 'What is JavaScript?', ['Programming lenguage', 'DataSciense', 'Machine learning'], 0),
    new Question(2, 'Where is JS used?', ['Front-end', 'back-end', 'both options are right'], 2),
    new Question(3, 'Where is PHP used?', ['Front-end', 'back-end', 'both options are right'], 1),
    new Question(4, 'What is GO?', ['Programming lenguage', 'DataSciense', 'Machine learning'], 0),
    new Question(5, 'What is React.js?', ['Programming lenguage', 'Library for fron-end', 'Freamwork'], 2),
]

Question.prototype.showQuestion = function(){
    console.log(this.quest)
    this.answers.forEach((idx, elem) => {
        console.log(`${elem} : ${idx}`)
    });
}

Question.prototype.checkAnswer = function(){
    let answer = prompt(this.quest);
    let map = false;

    if(Number(answer) === this.rightAnswer){
        console.log('Congratulations, you gave right answer!!!');
        score = score + 1;
        console.log(`Your total score ${score}`)
        console.log(`-------------`)
        map = true;
    }else if(answer === null){
        console.error('pause');
        console.log(`Your total score ${score}`);
        map = false;
    }else{
        console.error('Try again!!!');
        console.log(`Your total score ${score}`);
        map = false;
    }

    return map;
}



function askQuestion(){
    //Получаем рандомное число в заданном диапазоне
    let rand = Math.floor(Math.random() * arrayQuestion.length);
    arrayQuestion[rand].showQuestion();
    let res = arrayQuestion[rand].checkAnswer();
    if(res){
        askQuestion();
    }else{
        console.log('The end');
    }
}

askQuestion();
















