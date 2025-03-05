// Nechtasi musbat

function task17(a, b, c){
    if(a>0 && b>0 && c>0){
        console.log(3);
    } else if((a>0 && b>0 && c<0) || (a>0 && c>0 && b<0) || (b>0 && c>0 && a<0)){
        console.log(2);
    } else if((a>0 && b<0 && c<0) || (b>0 && a<0 && c<0) || (c>0 && a<0 && b<0)){
        console.log(1);
    } else {
        console.log(0);
    }
}

task17(1, 8, 27);
task17(-2, 10, 3);
task17(-1, 2, -23);
task17(-34, -3, -54);