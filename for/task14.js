// Mukammal son

function task14(num){
    let answer = 0;
    for(let i=0; i<num; i++){
        if(num%i==0){
            answer+=i;
        }
    }
    if(answer == num){
        console.log("true");
    } else {
        console.log("false");
    }
    
}

task14(6);
task14(15);