// Yoyma uchburchak

function task27(a){
    for(let y=0; y<a*2-1; y++){
        for(let x=0; x<a; x++){
            if(x>y || x>a*2-2-y){
                process.stdout.write(" ");
            } else {
                process.stdout.write("*");
            }
        }
        console.log();
    }
}

task27(5);