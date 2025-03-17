// Eng katta 2chi element

function task17(){
    let array = [1, 2, 6, 4, 7, 5];
    for(let i=0; i<array.length-1; i++){
        for(let j=0; j<array.length-1-i; j++){
            if(array[j] < array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    console.log(array[1]);
}

task17();