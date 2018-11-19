function fac(n){
    if(n==1){
        console.log(n);
         return 1;
    }
    else{
        console.log(n);
         return n*fac(n-1);
    }
}

let res = fac(3);
console.log(res);