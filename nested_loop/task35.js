// x ning daraja ketma ketligi

function task35(a, b){
    let answer = 1;
    let res = 0;
    for(let i=0; i<=b; i++){
        answer = 1;
        for(let j=0; j<i; j++){
            answer *= a;
        }
        res += answer;
    }
    console.log(res);
}

task35(2, 7);