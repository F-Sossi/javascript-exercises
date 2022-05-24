const fibonacci = function(n) {
    // Convert to integer
    const num = Number(n)
    // make sure non-negative
    if(num > 0){
        // deal with initial case of 1 and 2
        if(num < 2){
            return 1;
        }
        //generate sequence in the array
        const arr = [1,1];
        for(let i = 1; i < num - 1; i++){
            arr.push(arr[i] + arr[i-1]);
        }
        // return requested position value 
        return arr[num - 1];
    }else{
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
