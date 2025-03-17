// Teskari array

function task10(){
    let array = [1, 2, 3, 4];
    for(let i=array.length-1; i>=0; i--){
        process.stdout.write(array[i].toString() + " ");
    }
    console.log();
}

task10();