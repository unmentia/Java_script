// Arrayda n bormi?

function task4(n){
    let array = [6, 25, 91, 23, 72, 9, 18, 6];
    let t = 0;
    for(let i=0; i<array.length; i++){
        if(n == array[i]){
            t++;
        }
    }
    if(t>0){
        console.log("true");
    } else {
        console.log("false");
    }
}

task4(23);
task4(2);