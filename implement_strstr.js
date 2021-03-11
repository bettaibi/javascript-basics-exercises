
/** STR STR */

function strStr(haystack, needle) {
    return haystack.indexOf(needle);
};


let haystack = "ss";
let needle = "ff";
console.log(strStr(haystack, needle) )


/** Repeating Subtring pattern */

function repeatedSubstringPattern(s) {
    let leng = s.length;

    for(let i=0; i< leng-1; i++){
        
        let substr = s.substring(0, i+1);

        if(leng % substr.length === 0){

            let iteration = leng / substr.length;
            let newStr = '';
            while(iteration > 0){
                newStr += substr;
                iteration--;
            }
            
            if(newStr === s) return true;
        }
    }

    return false;
};


const test = "ababababa";

console.log(repeatedSubstringPattern(test))