const repeatString = function(word,num) {
    let wordCheck = word.length;
    if (num < 0 || wordCheck < 0) {
        return "ERROR";
    }
     else {
        for (let i = 0; i <= num; i++) {
        return word.repeat(num);
        }
    }
};

// Do not edit below this line
module.exports = repeatString;
