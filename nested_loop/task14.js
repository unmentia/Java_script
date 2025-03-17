// Parallelogram

function task14(a){
    for(let y=0; y<a; y++){
        for(let x=0; x<a+y; x++){
            if(x<y){
                process.stdout.write(" ");
            } else {
                process.stdout.write("*");
            }
        }
        console.log();
    }
}

task14(5);