// a va b sonlar orasidagi juft sonlar

function task7(a, b){
    let answer = 0;
    for(let i=a; i<b; i+=1){
        if(i%2 == 0){
            answer+=1;
        }
    }
    console.log(answer);
}

task7(4, 15);
task7(24, 31);