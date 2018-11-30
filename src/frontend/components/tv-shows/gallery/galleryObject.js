// let movieObj;

// fetch('/rest/show')
//         .then((res) => {
//             return res.json();
//         }) 
//         .then((myJson) => {
//             movieObj = myJson;
//         });

// export default movieObj;

const movieObjTest = {
    returnedObj: null,
    getMovie : function(){
        fetch('/rest/show')
        .then((res) => {
            return res.json();
        }) 
        .then((myJson) => {
            this.returnedObj = myJson;
        });
    }
}

export default movieObjTest;