// Recursion

// SUM OF ARRAY'S ELEMENTS

// Method 1
function sum(array, index){

    if(index === array.length){
        return 0;
    }
    return array[index] + sum(array, index + 1);
}

// console.log(sum([1,2,3,4,5,6], 0));

// Method 2
function sum2(array){
    if(array.length === 0){
        return 0;
    }
    let [head, ...rest] = array;
    return head + sum2(rest)
}
console.log(sum2([1,2,3,4,5,6]));

// FACTORIAL OF A NUMBER

function fact(num){
    if(num === 1){
        return num;
    }
    return num * fact(num -1);
}
// console.log(fact(5));

// X POWER N
function power(x, n){
    if(n === 1){
        return x;
    }
    return x * power(x, n-1);
}
// console.log(power(7, 2));

// Fuboncci Suite U0 = 0; U1 = 1; U2 = U1 + U0,  Un = Un-1 + Un-2

function fubo(num) {
    if(num === 0){
        return 0;
    }
    if(num === 1){
        return 1;
    }
    else{
        return fubo(num -1) + fubo(num -2);
    }
}

// console.log(fubo(8));