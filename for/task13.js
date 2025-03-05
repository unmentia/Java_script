// Ketma ketlik

function task13(a, n){
    let answer = 0;
    let plus = 0;
    for(let i=0; i<n; i++){
        answer = answer*10+a;
        plus += answer;
    }
    console.log(plus);
}

task13(3, 4);
task13(7, 5);