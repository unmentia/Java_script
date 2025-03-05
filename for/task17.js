// Tub son

function task17(num){
    let answer = 0;
    for(let i=1; i<=num; i++){
        if(num%i==0){
            answer++;
        }
    }
    if(answer==2){
        console.log("true");
    } else {
        console.log("false");
    }
}

task17(7);
task17(25);