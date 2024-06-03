const reverseString = function(arg) {
    let splitString = arg.split("");
    let res = '';
    for (let i = 1; i < (arg.length+1); i++) {
        res += splitString.at(-i);

    }
    return res;

};

// Do not edit below this line
module.exports = reverseString;
