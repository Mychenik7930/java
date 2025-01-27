let question1 = "скока два плюсе два";
let answer1 = 4;
let question2 = "а два умнож на два";
let answer2 = 4;
let question3 = "У Пети было 5 яблок три из них он съел, адно отдал другу. Сколько яблок у Пети осталось?";
let answer3 = 1;
let question4 = "У Маши было 10 конфе два она съела, адно отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?";
let answer4 = 12;
let question5 = "Сколько будет два плюсе два умнож на два";
let answer5 = 6;
let correctAnswers = 0;
let incorrectAnswers = 0;
let userAnswer1 = prompt(question1);
userAnswer1 = Number(userAnswer1);

if (userAnswer1 === answer1) {
    correctAnswers++;
} else {
    incorrectAnswers++;
}
let userAnswer2 = prompt(question2);
userAnswer2 = Number(userAnswer2);

if (userAnswer2 === answer2) {
    correctAnswers++;
} else {
    incorrectAnswers++;
}
let userAnswer3 = prompt(question3);
userAnswer3 = Number(userAnswer3);

if (userAnswer3 === answer3) {
    correctAnswers++;
} else {
    incorrectAnswers++;
}

let userAnswer4 = prompt(question4);
userAnswer4 = Number(userAnswer4);

if (userAnswer4 === answer4) {
    correctAnswers++;
} else {
    incorrectAnswers++;
}

let userAnswer5 = prompt(question5);
userAnswer5 = Number(userAnswer5);

if (userAnswer5 === answer5) {
    correctAnswers++;
} else {
    incorrectAnswers++;
}

alert(`прашол тест стока ты правильно ответи - ${correctAnswers} а стока раз ты лашара - ${incorrectAnswers}.`);