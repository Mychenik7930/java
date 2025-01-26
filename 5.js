let UserString = prompt("введите строку для обрезки").trim()
let startSliceIndex = Number(prompt("введите индекс которым нужно начать обрезку строки"))
let endSliceIndex = Number(prompt("введите индекс которым нужно закончить обрезку строки"))
let resultString = UserString.slice(startSliceIndex, endSliceIndex);
console.log(alert("Результат: " + resultString));
