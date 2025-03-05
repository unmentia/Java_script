// a va b sonlar orasidagi sonlar yig'indisi

function task6(a, b){
    let answer = 0;
    for(let i=a; i<b; i+=1){
        answer+=i;
    }
    console.log(answer);
}

task6(2, 8);
task6(5, 15);