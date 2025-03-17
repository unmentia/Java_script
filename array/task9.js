// nchi indexni olib tashlash

function task9(n){
    let array = [4, 5, 6, 7];
    let array2 = [];
    for(let i=0; i<array.length; i++){
        if(n==i){
            continue;
        }
        array2[i] = array[i+1];
        process.stdout.write(array[i].toString() + " ");
    }  
    console.log();
}

task9(2);