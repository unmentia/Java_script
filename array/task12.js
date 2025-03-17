// O'xshash elementlar

function task12(){
    let array = [1, 2, 1, 4];
    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i] == array[j]){
                console.log("array[" + i + "]: " + array[i] + " = array[" + j + "]:" + array[j]);
            }
        }
    }
}

task12();