// Sonlar juftligida C harfi 

function task4(num){
    for(let y=0; y<num; y++){
        for(let x=0; x<num; x++){
            if(x==0 || y==0 || y==num-1){
                process.stdout.write("(" + y + "," + x + ") ");
            }
        } 
        console.log();
    }
}

task4(10);