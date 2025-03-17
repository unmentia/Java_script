// G'alati parallelogram

function task19(a){
    for(let y=0; y<a; y++){
        for(let x=0; x<a*2-1-y; x++){
            if(x==a-1-y || (y==0 && x>=a-y) || x==a*2-2-y || y==a-1){
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        console.log();
    }
}

task19(5);