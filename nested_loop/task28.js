// Romb

function task28(a){
    let t = 1;
    for(let y=0; y<a*2-1; y++){
        for(let x=0; x<a-t; x++){
            process.stdout.write(" ");
        }
        for(let i=0; i<t; i++){
            process.stdout.write("* ");
        }
        if(y<a-1){
            t++;
        } else {
            t--;
        }
        console.log();
    }
}

task28(5);