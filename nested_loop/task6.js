// Sonlar ro'yxati

function task6(a){
    let res = -1;
    for(let y=0; y<a; y++){
        for(let x=0; x<a; x++){
            res++;
            process.stdout.write(res.toString() + " ");
        }
        console.log();
    }
}

task6(10);