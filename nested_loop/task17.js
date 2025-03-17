// Yulduzli x

function task17(a){
    for(let y=0; y<a; y++){
        for(let x=0; x<a; x++){
            if(x==y || x==a-1-y){
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        console.log();
    }
}

task17(5);