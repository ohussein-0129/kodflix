let obj1 = {a:{b:2, c:{d: 5, e:4}}}; //getMax
let obj2 = {a: 2, b: {c:6, d:3}, e:2};
//let obj3 = {a: 1, b:5, c:3};
let obj4 = {a:{b:4, c:5}};
// function getMax(obj){
//     let max;
//     Object.keys(obj).forEach((key) => {
//         let val = obj[key];
//         if(typeof val==='object'){
//             val = getMax(val);
//         }

//         if(!max || val>max){
//             max = val;
//         }
//     });
//     return max;
// }

let max = getMax(obj4);
console.log(max);