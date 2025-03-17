// Diaganal

function task7(a){
    for(let y=0; y<a; y++){
        for(let x=0; x<a; x++){
            if(x==y){
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        console.log();
    }
}

task7(5);