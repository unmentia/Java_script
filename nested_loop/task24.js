// Qulagan archa

function task24(a){
    for(let y=0; y<a; y++){
        for(let x=0; x<a*2-1-y; x++){
            if(x<y){
                process.stdout.write(" ");
            } else {
                process.stdout.write("*");
            }
        }
        console.log();
    }
}

task24(5);