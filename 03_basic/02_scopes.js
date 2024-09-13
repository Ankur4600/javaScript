//var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("INNER:", a)
}




// console.log(a);
// console.log(c);
// console.log(b);


function one(){
    const userName = "ankur"
    function two(){
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website)

    // two()
}

// one()

if(true){
    const userName ="ankur"
    if(userName === "ankur"){
        const website = " youtube"
        console.log(userName + website)
    }
    //console.log(website)// throw error
}

//console.log(userName)//throw error

//+

addOne(5)
function addOne(num){
    return num+1
}




const addtwo = function(num){
    return num + 2
}
addtwo(55)

