// Sonlar diaganali

function task8(a){
    for(let y=0; y<=a; y++){
        for(let x=0; x<=a; x++){
            if(x==y){
                process.stdout.write("(" + y + "," + x + ") ");
            } else {
                process.stdout.write(" ");
            }
        }
        console.log();
    }
}

task8(5);