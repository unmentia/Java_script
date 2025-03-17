// Sonlar juftligida ustunlar

function task5(a){
    for(let y=0; y<a; y++){
        for(let x=0; x<a; x++){
            if(y==0 || y==a-1 || x%2==0){
                process.stdout.write("(" + y + "," + x + ") ");
            } else {
                process.stdout.write("      ");
            }
        }
        console.log();
    }
}

task5(10);