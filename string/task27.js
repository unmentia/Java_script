// Takrorlanmagan charlar

function task27(){
    let str = "dasturlash";
    let res = "";
    for(let i=0; i<str.length; i++){
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
            res += str[i];
        }
    }
    console.log(res);
}

task27();