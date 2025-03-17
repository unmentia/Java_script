// String ni char array ga

function task11(){
    let str = "algorithm";
    let char = str.split("");
    process.stdout.write(char.toString());
    console.log();
    for(let i=0; i<char.length; i++){
        for(let j=0; j<char.length-1-i; j++){
            if(char[j] > char[j+1]){
                let t = char[j];
                char[j] = char[j+1];
                char[j+1] = t;
            }
        }
    }
    console.log(char.join(""));
}

task11();