let example = ['hello', 'nested array'];

function howManyArrays(arr){
    if(!arr || !isAnArray(arr)) return 0;
    let count = 1;
    arr.forEach(element => {
        if(isAnArray(element)){
            count += howManyArrays(element);
        }
    });
    return count;
}

// function howManyArrays(arr){
//     if(!arr || !isAnArray(arr)) return 0;
//     return arr.reduce((total, val)=>{
//         return isAnArray(val) ?
//             total + howManyArrays(val) :
//             total;
//     }, 1);
// }

function isAnArray(val){
    return val.constructor===Array;
}


//let howMany = howManyArrays(['Hello', ['Nested']]);
let howMany = howManyArrays(['Hi', ['n1', ['n2']], ['n1'], 'Bye']);
//let howMany = howManyArrays([]);
console.log(howMany);
