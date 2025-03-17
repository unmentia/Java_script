// Uzunroq romb

function task29(a){
    let t = 0;
    for(let y=0; y<a*2-1; y++){
        for(let x=0; x<a*2-1; x++){
            if(x>=a-1-t && x<=a-1+t){
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        if(y>=a-1){
            t--;
        } else {
            t++;
        }
        console.log();
    }
}

task29(5);