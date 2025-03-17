// a va b sonlar orasidagi sonlar darajasi

function task33(a, b, c){
    let answer = 1;
    let res = 0;
    for(let i=a; i<=b; i++){
        answer = 1;
        for(let j=0; j<c; j++){
            answer *= i;
        }
        res += answer;
    }
    console.log(res);  
}

task33(2, 10, 3);