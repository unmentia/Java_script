// Teskari diaganal

function task9(a){
    for(let y=0; y<a; y++){
        for(let x=0; x<a; x++){
            if(x==a-1-y){
                process.stdout.write("*");
             } else {
                process.stdout.write(" ");
             }
        }
        console.log();
    }
}

task9(6);