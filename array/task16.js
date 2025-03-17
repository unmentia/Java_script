// Array elementlarini kamayish tartibda

function task16(){
    let array = [2, 4, 1, 5];
    for(let i=0; i<array.length-1; i++){
        for(let j=0; j<array.length-1-i; j++){
            if(array[j] < array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    console.log(array.join(" "));
}

task16();