// Juft sonlar soni

function task5(num){
    let answer = 0;
    for(let i=0; i<num; i+=1){
        if(i%2 == 0){
            answer+=1;
        }
    }
    console.log(answer);
}

task5(10);
task5(18);