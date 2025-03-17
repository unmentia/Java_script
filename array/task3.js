// O'rtacha qiymat

function task3(){
    let array = [6, 25, 91, 23, 72, 9, 18, 6];
    let sum = 0;
    let res = 0;
    for(let i=0; i<array.length; i++){
        sum += array[i];
    }
    res = Math.floor(sum/array.length);
    console.log(res);
}

task3();