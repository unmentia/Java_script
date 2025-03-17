// Teskari uchburchak

function task11(a){
    for(let y=0; y<a; y++){
        for(let x=0; x<=a-1-y; x++){
            process.stdout.write("*");
        }
        console.log();
    }
}

task11(5);