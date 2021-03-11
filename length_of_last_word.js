
function lengthOfLastWord(s) {
    let arr = s.split(" ");
    const leng = arr.length -1;

    for(let i= leng; i>= 0; i--){
        if(arr[i] !== '') return arr[i].length;
    }
    
    return 0;
};

let test = "Hello word";
console.log(lengthOfLastWord("   a cs "))