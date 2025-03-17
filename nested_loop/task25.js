// Archa karkazi

function task25(a){
    for(let y=0; y<a; y++){
        for(let x=0; x<a+y; x++){
            if(x==a-1-y || x==a-1+y || y==a-1){
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        console.log();
    }
}

task25(5);