let string = 'hello';

function getUnique(arr){
    return arr.reduce((acc, c)=> {
        acc.includes(c) || acc.push(c);
        return acc;
    }, []);
}

// let res = getUnique(string.split('')).join('');
// console.log(res);


function getMostUsedCharacter(str){
    let chArr = str.split('');
    let mostChar = chArr.reduce((acc, rC)=> {
        let filtered = chArr.filter((fC)=> {
            return fC.toLowerCase()===rC.toLowerCase();
        });
        let count = filtered.length;
        acc = count>acc[1] ?
            acc = [rC, count] :
            acc;
        return acc;
    }, ['', 0]); 
    return mostChar[0];
}

// let res = getMostUsedCharacter('Heeello');
// console.log(res);

function isAllUnique(str){
    let chArr = str.split('');
    for(let i=0; i<chArr.length; i++){
        let filtered = chArr.filter((c)=>{
            return c.toLowerCase()===chArr[i].toLowerCase();
        });
        if(filtered.length>1){
            return false;
        }
    }
    return true;
}

let res = isAllUnique('HelLo');
console.log(res);