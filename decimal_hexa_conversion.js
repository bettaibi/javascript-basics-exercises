// Custom Solution
function decimalToHexa(n){
    hexa = '';
    let arr = ['A', 'B', 'C', 'D', 'E', 'F'];

    while(n > 0){
        let remainder = Math.trunc(n%16);
        if(remainder >= 10)
        hexa = arr[remainder - 10] + hexa;
        else
        hexa = remainder + hexa;
        n = Math.trunc(n / 16);
    }

    return hexa;
}
//  Solution 2, using toString
function decimalToHexa2(n){
    return n.toString(16);
}

// Custom solution
function hexaToDecimal1(hexa){
    let sum = 0;
    const leng = hexa.length;
    hexa = hexa.toLowerCase();
    for(let i=0; i< hexa.length; i++){
        const index = '0123456789abcdef'.indexOf(hexa.charAt(i));
        sum += (index * Math.pow(16, leng - 1 - i));
    }
    return sum;
}

console.log(hexaToDecimal1('FE'))

// Solution 2, using parseInt()
function hexaToDecimal2(hexa){
    return parseInt(hexa, 16);
}