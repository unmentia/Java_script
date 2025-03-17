// String palindrommi

function task23(){
    let str = "abcdcba";
    // let res = "";
    let t = 0;
    for(let i=str.length-1; i>=0; i--){
        if(str[i] == str[t]){
            t++;
        }      
    }
    if(t==str.length){
        console.log("voy palindrom ekan");
    } else {
        console.log("birbalo");
    }
}

task23();