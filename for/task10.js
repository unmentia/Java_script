// a va b sonlar orasida musbat sonlar

function task10(a, b){
    let answer = 0;
    for(let i=a; i<=b; i++){
        if(i>0){
            answer++;
        }
    }
    console.log(answer);
}

task10(-1, 10);
task10(-3, 2);