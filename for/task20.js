// Teskari son

function task20(num){
    let answer = 0;
    for(; num>0;){
        answer = answer*10 + (num%10);
        num = Math.floor(num/10);
    }
    console.log(answer);
}

task20(12345);
task20(6821);