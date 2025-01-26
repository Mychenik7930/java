const myName = 'Maksim';
const programmingLanguage = 'pascal';
const courseCreatorName = 'ausheev';
const reasonText = 'ne znayou'
const numberOfMonth = '12'
let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на кyрсе по ${programmingLanguage} y ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройдуданный курс до конца!`
myInfoText = myInfoText.replaceAll("pascal", "PASCAL");
console.log(myInfoText);
console.log(myInfoText.length);
console.log("перви символ", myInfoText[0]);
console.log("последний символ", myInfoText[myInfoText.length -1]);