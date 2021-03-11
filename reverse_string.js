function reverseVowels(s) {
    let arr = s.split('');
    let left = 0;
    let right = arr.length -1;

    while(left < right){

        if(!isVowel(arr[left])){
            left++;
        }

       else if(!isVowel(arr[right])){
            right--;
        }

        else{
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }

    }

    return arr.join('');
}

function isVowel(letter){
   return ['a', 'e', 'i', 'u', 'o'].includes(letter.toLowerCase());
}

const testCase = "Marge, let's \"went.\" I await news telegram."
// What is expected  "Marge, let's \"went.\" i awaIt news telegram."
console.log(reverseVowels(testCase));