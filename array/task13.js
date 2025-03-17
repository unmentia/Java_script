// 2 ta arrayda o'xshash elementlar

function task13(){
    let array1 = [1, 2, 3];
    let array2 = [1, 4, 1, 2];
    for(let i=0; i<array1.length; i++){
        for(let j=0; j<array2.length; j++){
            if(array1[i] == array2[j]){
                console.log("array1[" + i + "]: " + array1[i] + " = array2[" + j + "]");
            }
        }
    }
}

task13();