function getName1(name) {
    return "Имя равно " + name;
}

const getName2 = function(name) {
    return "Имя равно " + name;
};

const getName3 = (name) => "Имя равно " + name;

console.log(getName1("Александр")); 
console.log(getName2("Мария"));     
console.log(getName3("Иван"));      