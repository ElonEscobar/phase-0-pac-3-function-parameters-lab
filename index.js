// Single parameter
function introduction(name){
    return (`Hi, my name is ${name}.`);
}
// To use more than one parameter, separate the parameters with a comma
function introductionWithLanguage(name,language){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
// Optional parameter
function introductionWithLanguageOptional(name,language = "JavaScript"){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}