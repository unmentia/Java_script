// O'zaro teng arraylar

function task19(){
    let array1 = [1, 2, 3, 7, 4];
    let array2 = [1, 2, 3, 7, 4];
    let t = 0;
    for(let i=0; i<array1.length; i++){
        if(array1[i] == array2[i]){
            t++;
        }
    }
    if(t==array1.length){
        console.log("true");
    } else {
        console.log("false");
    }
}

task19();