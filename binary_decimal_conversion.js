//  Decimal to Binary
function decimalToBinary(decimal){
    let str = "";
    
    while(decimal >= 1){
        let r = Math.trunc(decimal % 2);
        str = r+str;
        decimal = Math.trunc(decimal / 2);
    }

    return str;

    // OR
    // return decimal.toString(2)
}


// Binary to Decimal
function binaryToDecimalMethod1(str){
    // reverse str
    let arr = str.split('').reverse();
    let sum = 0;
    for(let i=0; i< arr.length; i++){
        if(arr[i] === '1'){
            sum += Math.pow(2, i);
        }
    }
    return sum;
    // OR
    // return parseInt(str, 2);
}

// Binary to decimal without reversing
function binaryToDecimalMethod2(str){
    const leng = str.length;
    let sum = 0;

    for(let i=0; i< str.length; i++){
        if(str.charAt(i) === '1'){
            sum += Math.pow(2, leng -1 - i);
        }
    }

    return sum;
}
