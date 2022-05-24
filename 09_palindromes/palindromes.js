const palindromes = function (str){ 
    //              remove spaces                      remove all punctuation
    const clean = str.replace(/\s+/g, '').toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    console.log(clean);

    let right = clean.length - 1;
    let left = 0

    while(left < right){
        if(clean[left] != clean[right]){
            return false;
        }

        right--;
        left++;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
