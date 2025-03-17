// Eng katta element

function task1(){
    let array = [12, 21, 36, 71, 24, 85, 12, 30, 25];
    let max = array[0];
    for(let i=0; i<array.length; i++){
        if(max<array[i]){
            max = array[i];
        }
    }
    console.log(max);
}

task1();