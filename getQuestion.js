const fs = require('fs');


function getQuestionFromFile(){
    let data = fs.readFileSync('questions.json','utf-8');
    return data;
   
}
getQuestionFromFile();
module.exports = getQuestionFromFile;