// function logTwoValues(value1, value2) {
//     console.log(`The two values are ${value1} and ${value2}.`);
//   }

function introduction(name){
    return (`Hi, my name is ${name}.`);
}
introduction("Josh");
introduction("Nancy");

function introductionWithLanguage(name, language){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
introductionWithLanguage("Josh", "JavaScript");


function introductionWithLanguageOptional(name, language = "JavaScript"){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`); 
}