// function existsNumberInObject(num, obj, found=false) {
// 	Object.keys(obj)
// 		.forEach((key)=>{
//             let val = obj[key];
// 			if(typeof val==='object'){
// 				numExists = existsNumberInObject(num, obj[key], found);
//             }
// 			if(val===num){
//                 console.log('no');
//                 found = true;
// 			}
//         });
//     console.log(found);
// 	return found;
// }

// function existsNumberInObject(num, obj){
//     let found = false;
//     for(let key in obj){
//         console.log(key);
//         if(typeof obj[key]!=='object'){
//            found = found ||  (obj[key]===num);
//         }
//         else{
//             found = found || existsNumberInObject(num, obj[key]);
//         }
//     }
//     return found;
// }

// function existsNumberInObject(num, obj){
//     let found = false;
//     Object.keys(obj)
//         .forEach((key)=>{
//             let val = obj[key];
//             found = typeof val!=='object' ?
//                 found || val === num :
//                 found || existsNumberInObject(num, val);
//         });
//     return found;
// }

function existsNumberInObject(num, obj){
    return Object.keys(obj).reduce((found, key)=> {
        let val = obj[key];
        return found = typeof val !== 'object' ?
            found || val === num :
            found || existsNumberInObject(num, val);
    }, false);
}
let res = existsNumberInObject(8, {a:{b:{c:4, d:5}, e:3}});
//let res = existsNumberInObject(1, {a:7, b:{c:2, d:1}});
console.log(res);

// return found = typeof val !== obj ?
//             found || val === num :
//             found || existsNumberInObject(num, val);