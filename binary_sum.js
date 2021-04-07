
// Calculate the sum of two binary number.

function binarySum(a, b){

    let carry = 0;
    let i = a.length -1;
    let j = b.length -1;
    let sum = 0;
    let result = '';

    while(j >= 0 || i >= 0){
        sum = carry;
        sum +=  ((parseInt(a.charAt(i)) || 0) + (+b.charAt(j) || 0));
        result = Math.trunc(sum % 2) + result;
        carry = Math.trunc(sum / 2)

        j--;
        i--;
    }

    if(carry === 1) result = carry + result;

    return result;
}


// console.log(binarySum('101011101', '1101110'));
// Expected result  = 111001011