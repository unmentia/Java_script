// Teskari archa karkazi

function task26(a){
    for(let y=0; y<a; y++){
        for(let x=0; x<a*2-1-y; x++){
            if(x==y || x==a*2-2-y || y==0){
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        console.log();
    }
}

task26(5);