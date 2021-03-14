
//Detect Pattern of Length M Repeated K or More Times

/**
    Given an array of positive integers arr,  find a pattern of length m that is repeated k or more times.
    A pattern is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times consecutively without overlapping. A pattern is defined by its length and the number of repetitions.
    Return true if there exists a pattern of length m that is repeated k or more times, otherwise return false.
 */

/**
    Input: arr = [1,2,4,4,4,4], m = 1, k = 3
    Output: true
    Explanation: The pattern (4) of length 1 is repeated 4 consecutive times. Notice that pattern can be repeated k or more times but not less.
 */

/*
    Input: arr = [1,2,1,2,1,3], m = 2, k = 3
    Output: false
    Explanation: The pattern (1,2) is of length 2 but is repeated only 2 times. There is no pattern of length 2 that is repeated 3 or more times.
*/

function containsPattern(arr, m, k) {
    const leng = arr.length;
    let count = 0;
    
    for(let i = 0; i <= leng-m; i++){
        if(count >= k){
            return true;
        }

        count = 0;
        let subArray = arr.slice(i, i+m)
        
        for(let j = i; j <= leng - m; j = j + m){
            const subArr2 = arr.slice(j, j+m)
            if(subArray.join('') === subArr2.join('')){
                count ++;
            }
            else{ break;}
        }
    }
    
    return false;
};
