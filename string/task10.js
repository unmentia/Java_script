// char arraydan b cha string

function task10(a, b){
    let str = ['d', 'a', 's', 't', 'u', 'r', 'l', 'a', 's', 'h'];
    let res = [];
    for(let i=0; i<b; i++){
        res[i] = str[i+a];
    }
    console.log(res.join(""));
}

task10(3, 5);