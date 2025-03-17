// Uchburchak karkazi

function task22(a){
    for(let y=0; y<a; y++){
        for(let x=0; x<a; x++){
            if(y==0 || x==y || x==a-1){
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        console.log();
    }
}

task22(5);