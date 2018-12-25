const fs = require('fs');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        
    }
    return array;
}
function getQuestionFromFile(){
    let data = JSON.parse(fs.readFileSync('questions.json','utf-8'));
    let dataToReturn = data.questions[Math.floor(Math.random()*data.questions.length)];
    dataToReturn.answers = shuffleArray(dataToReturn.answers);
    return dataToReturn
   
}
getQuestionFromFile();
module.exports = getQuestionFromFile;