// Son nechi xonali

function task18(num){
    let answer = 0;
    for(; num>0;){
        answer++;
        num = Math.floor(num/10);
    }
    console.log(answer);
}

task18(121);
task18(23);