// a index ga b ni qo'shish

function task8(a, b){
    let array = [4, 5, 6, 7];
    array.splice(a, 0, b);
    console.log(array.join(" "));
}

task8(1, 9);