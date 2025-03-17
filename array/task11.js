// Arrayda n nechi marta bor

function task11(n){
    let array = [2, 4, 6, 4];
    let t = 0;
    for(let i=0; i<array.length; i++){
        if(n==array[i]){
            t++;
        }
    }
    console.log(t);
}

task11(4);
task11(5);