// Eng kichik qiymat

function task2(){
    let array = [12, 21, 36, 71, 24, 85, 1, 30, 25];
    let min = array[0];
    for(let i=0; i<array.length; i++){
        if(min > array[i]){
            min = array[i];
        }
    }
    console.log(min);
}

task2();