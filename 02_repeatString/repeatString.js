const repeatString = function(string, num) {
    let returnResult = '';
    if (num < 0) {
        returnResult = 'ERROR';
    }
    for(let i = 0; i < num; i++) {
        returnResult += string;
    }
    return returnResult;   

};

// Do not edit below this line
module.exports = repeatString;
