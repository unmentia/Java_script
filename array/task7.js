// Sonni boshiga qo'shish

function task7(n){
    let array = [6, 25, 91, 23, 72, 9, 18, 6];
    array.unshift(n);
    for(let i=0; i<array.length; i++){
        process.stdout.write(array[i].toString() + " ");
    }
    console.log();
}

task7(13);