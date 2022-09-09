const sumAll = function(first, second) {
    
    let test = 0;
    if (Math.sign(first) === -1 || Math.sign(second) === -1 || typeof(first) !== "number" || typeof(second) !== "number") {
        return "ERROR";
    }
    else if (first > second) {
    for(let i = second; i <= first; i++) {
        test += i;
    }
    }
    else {
    for(let i = first; i <= second; i++) {
    test += i;
    }
}

return test;

};

// Do not edit below this line
module.exports = sumAll;

