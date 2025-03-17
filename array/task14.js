// O'xshash elementlarni olib tashlash

function task14(){
    let array = [1, 3, 4, 1, 5, 3];
    let array2 = [...new Set(array)];
    console.log(array2.join(" "));
}

task14();