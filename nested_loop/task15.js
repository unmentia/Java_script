// To'rtburchak qolibi

function task15(a){
    for(let y=0; y<a; y++){
        for(let x=0; x<a; x++){
            if(x==0 || x==a-1 || y==0 || y==a-1){
                process.stdout.write("*");
            } else {
                process.stdout.write(" ");
            }
        }
        console.log();
    }
}

task15(5);