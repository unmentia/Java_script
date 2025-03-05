// Sonning teskarisi

function task21(num){
    let res = num;
    let answer = 0;
    for(; num>0;){
        answer = answer*10 + (num%10);
        num = Math.floor(num/10);
    }
    if(answer == res){
        console.log("true");
    } else {
        console.log("false");
    }
}

task21(12321);
task21(57855);
task21(8402048);