// a va b sonlar orasida 2 va 3 ga bo'linadiganlar

function task9(a, b){
    let answer = 0;
    for(let i=a; i<b; i++){
        if(i%2==0 && i%3==0){
            answer++;
        }
    }
    console.log(answer);
}

task9(6, 16);
task9(2, 21);