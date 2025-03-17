// Uchburchak

function task10(a){
    for(let y=0; y<a; y++){
        for(let x=0; x<=y; x++){
            process.stdout.write("*");
        }
        console.log();
    }
}

task10(5);