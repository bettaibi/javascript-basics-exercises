// Here, we will override all javascript predefined functions for arrays.

// BASIC Array;
let array = [1,8,4,5,6,9,7,8,8,0,100,99];

// 1. ForEach
Array.prototype.myFor = function(callback){
  for(let i=0; i< this.length; i++)
  callback(this[i], i);  
};
// Test
// array.myFor((item, i)=>{console.log(item)});

// 2. Map
Array.prototype.myMap = function(callback){
    let length = this.length;
    let arr = [];
    for(let i=0; i<length; i++)
    arr = [...arr, callback(this[i], i)];
    return arr;
};
// Test
// display All odd numbers
// const newArr = array.myMap((item, i)=>{return (item%2) != 0? item:''});
// console.log(newArr)

// 3. Filter
Array.prototype.myFilter = function(callback){
    let length = this.length;
    let arr = [];
    for(let i=0; i<length; i++){
        if(callback(this[i], i)){
            arr = [...arr, this[i]];
        }else{continue;}
    }
    return arr;
};
// Test
// Filter All number greater than 10
// const newArray = array.myFilter((item, i)=>{
//     return item > 10;
// });
// console.log(newArray);

// 4. Push
Array.prototype.myPush = function(obj){
     this[this.length] = obj;
};
// Test
// array.myPush(200);
// console.log(array)

// 5. Unshift
Array.prototype.myUnshift = function(obj){
    let length = this.length;
    for(let i = length; i>0; i--)
    this[i] = this[i-1];
    this[0] = obj;
};

// Test 
// array.myUnshift(300);
// console.log(array);

// 6. Pop
Array.prototype.myPop = function(){
    this.length = this.length-1;
};

// Test
// array.myPop();
// console.log(array);

// 7. Shift
Array.prototype.myShift = function(){
    const l = this.length;
    let aux;
    for(let i=0; i<l-1; i++){
       aux = this[i];
       this[i] = this[i+1];
       this[i+1] = aux;
    }
    this.length = this.length -1;
};
// Test 
// array.myShift();
// console.log(array);

// 8. Every
Array.prototype.myEvery = function(callback){
    let l = this.length;
    for(let i=0; i<l; i++){
        if(!callback(this[i], i)){
            return false;
        }
    }
    return true;
};
// Test
// const satisfied = array.myEvery((item, i)=>{return item <= 100});
// console.log(satisfied)

// 9. Index Of 
Array.prototype.myIndexOf = function(elem, fromIndex){
    let l = this.length;
    fromIndex = fromIndex === undefined? 0: fromIndex;
    if(isNaN(fromIndex))
    return -1;
    for(let i=fromIndex; i<l; i++){
        if(this[i] === elem)
        return i;
    }
    return -1;
};
// Test
// const index = array.myIndexOf(8,5)
// console.log(index)

// 10. Includes
Array.prototype.myIncludes = function(elem, fromIndex){
    let l = this.length;
    fromIndex = fromIndex === undefined? 0: fromIndex;
    if(isNaN(fromIndex))
    return false;
    for(let i=fromIndex; i<l; i++){
        if(this[i] === elem)
        return true;
    }
    return false;
};
// const index = array.myIncludes(8,5)
// console.log(index)

// 11. LastIndexOf
Array.prototype.myLastIndexOf = function(elem, fromIndex){
    fromIndex = fromIndex === undefined? 0 : fromIndex;
    let l = this.length;
    let lastIndex = -1;
    for(let i=fromIndex; i< l; i++){
        if(this[i] === elem){
            lastIndex = i;
        }
    }
    return lastIndex;
};

// Test
// const lastIndex = array.myLastIndexOf(8);
// console.log(lastIndex)

// 12. toString()
Array.prototype.myToString = function(){
    let length = this.length;
    let str = '';
    for(let i=0; i<length-1; i++)
     str+= this[i]+',';
    return str+this[length-1];
};

// Test
// const str = array.myToString();
// console.log(str)

//  13. join();
Array.prototype.myJoin = function(separator){
    if(typeof separator !== 'string'){
        // this is an optional test
        console.error('Separator must be a string');
    }
    else{
        let l = this.length;
        let str = '';
        for(let i=0; i<l-1; i++)
            str+=this[i]+separator;
        return str+this[l-1];
    }
}
// Test
// const str = array.myJoin('*');
// console.log(str)

// 14. concat()
Array.prototype.myConcat = function(...arrays){
    if(!arrays instanceof Array) return;
    let arr = []
    for(let item of arrays)
    arr = [...arr, ...item];
    return [...this, ...arr];
};
// Test
// const res = array.myConcat([800,200,100], [60,80,90], [500,500,500]);
// console.log(res)

// 15. slice()
Array.prototype.mySlice = function(start, end){
    let arr = [];
    for(i=start; i<end; i++){
        arr = [...arr, this[i]];
    }
    return arr;
};
function insertInPos(pos, ...elems){

}
// const arr = array.mySlice(0,5);
// console.log(arr)

// 16. splice()
Array.prototype.mySplice = function(start, deleteCout, ...items){
    console.log(items)
    if(isNaN(start))
    return;
    let deleted = [];
    for(let i=start; i<start+deleteCout; i++){
        // Removed elements
        deleted = [...deleted, this[i]];
        if(items.length >= deleteCout)
        this[i] = items[deleted.length - 1];
    }
    if(item> deleteCout){
        // let diff = 
        // for(let i= this.length)
    }

    return deleted;
};

array.mySplice(3,0,800,900,700)
console.log(array)

// 17. sort()

// 18. reduce()
