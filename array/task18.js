// Array elementlar yig'indisi a ga tengmi?

function task18(n){
    let array = [1, 2, 3, 7, 4];
    for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i] + array[j] == n){
                console.log(array[i] + "+" + array[j] + "=" + n);
            }
        }
    }
}

task18(5)