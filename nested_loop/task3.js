// Sonlar juftligi

function task3(num){
    for(let i=0; i<num; i++){
        for(let j=0; j<num; j++){
            process.stdout.write("(" + i + "," + j + ") ");
        }
        console.log();
    }
}

task3(10);