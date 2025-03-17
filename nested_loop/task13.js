// Sonlar uchburchagi tartibli varianti

function task13(a){
    for(let y=1; y<=a; y++){
        for(let x=1; x<=y; x++){
            process.stdout.write(y.toString());
        }
        console.log();
    }
}

task13(5);