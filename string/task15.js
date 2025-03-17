// a va b index lari

function task15(b, n){
    let str1 = "dasturlash.uz";
    let str2 = "lash";
    let res = str2.slice(b, b+n);
    let answer = str1.includes(res);
    console.log(answer);
}

task15(0, 4);