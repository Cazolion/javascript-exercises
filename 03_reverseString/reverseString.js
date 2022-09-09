const reverseString = function(word) {
        let sliceText = "";
        let reverseWord = "";
        
        for (let i=0; i <= word.length; i++) {
            sliceText = word.slice(i,i+1);
            reverseWord = sliceText + reverseWord;
        }
        return reverseWord;
    
};

// Do not edit below this line
module.exports = reverseString;
