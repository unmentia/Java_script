// Diaganal va uchburchaklar

function task16(a){
    for(let y=0; y<a; y++){
        for(let x=0; x<a; x++){
            if(x<y){
                process.stdout.write("-");
            } else if(x==y){
                process.stdout.write("*");
            } else {
                process.stdout.write("+");
            }
        }
        console.log();
    }
}

task16(5);