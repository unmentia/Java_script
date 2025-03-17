// Uchburchak

function task20(a){
    for(let y=0; y<a; y++){
        for(let x=0; x<=a-1; x++){
            if(x<a-1-y){
                process.stdout.write(" ");
            } else {
                process.stdout.write("* ");
            }
        }
        console.log();
    }
}

task20(5);