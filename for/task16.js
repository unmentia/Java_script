// Armstrong raqami

function task16(num){
    let room = 0;
    let plus = 0;
    let temp = num;
    for(; num>0;){
        room++;
        num = Math.floor(num/10);
    }
    num = temp;
    for(; num>0;){
        let digit = num%10;
        let power = 1;
        for(let i=0; i<room; i++){
            power *= digit;
        }
        plus += power;
        num = Math.floor(num/10);
    }
    if(temp == plus){
        console.log("true");
    } else {
        console.log("false");
    }
}

task16(153);
task16(256);