// 5ga bo'linadigan sonlar yig'indisi

function task4(num){
    let answer = 0;
    for(let i=0; i<=num; i+=1){
        if(i%5 == 0){
            answer+=i;
        }
    }
    console.log(answer);
}

task4(35);
task4(18);