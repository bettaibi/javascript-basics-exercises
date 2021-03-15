// Summary Ranges

/*
    You are given a sorted unique integer array nums.
    Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
    Each range [a,b] in the list should be output as:
    "a->b" if a != b
    "a" if a == b
*/

/*
    Input: nums = [0,1,2,4,5,7]
    Output: ["0->2","4->5","7"]
    Explanation: The ranges are:
    [0,2] --> "0->2"
    [4,5] --> "4->5"
    [7,7] --> "7"
*/

function summaryRanges(nums) {
    
    const leng = nums.length;
    let result = [];
    let index = 0;
    let i = 0;
    let j=0;
    
    if(leng === 0){
        return [];
    }
    
    if(leng === 1){
        return [`${nums[0]}`];
    }
    
     while(i < leng){
         
        if(nums[i] + 1 !== nums[i+1]){
            result[index] = `${nums[i]}`
        }
         
        while(nums[j] + 1 === nums[j+1]){
            result[index] = `${nums[i]}->${nums[j+1]}`;
            j++;
        }
         
        index++;
        j++;
        i = j;
     }
    
    return result;
    
}