function getTotal(obj){
    return Object.keys(obj)
        .reduce((total, key)=> {
            let val = obj[key];
            return typeof val !== 'object' ?
                total + val :
                total + getTotal(val);
        }, 0);
}

let r = getTotal({usOpen: {man: 2, woman: 4, doubles: 1},
    wimbledon: 3,
    rolandGarros: {man: 3, woman: 1}
    });

console.log(r);