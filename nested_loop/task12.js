// Sonlar uchburchagi

function task12(a){
    for(let y=1; y<=a; y++){
        for(let x=1; x<=y; x++){
            process.stdout.write(x.toString());
        }
        console.log();
    }
}

task12(5);