// Teskari parallelogram

function task18(a){
    for(let y=0; y<a; y++){
        for(let x=0; x<a*2-1-y; x++){
            if(x<a-1-y){
                process.stdout.write(" ");
            } else {
                process.stdout.write("*");
            }
        }
        console.log();
    }
}

task18(5);