// Raqamlar yig'indisi

function task19(num){
    let answer = 0;
    for(; num>0;){
        answer += num%10;
        num = Math.floor(num/10);
    }
    console.log(answer);
}

task19(35);
task19(127);