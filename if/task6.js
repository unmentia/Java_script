// a, b, c  katta son

function task6(a, b, c){
    if(a>b && a>c){
        console.log("katta son =", a);
    } else if(b>a && b>c){
        console.log("katta son =", b);
    } else if(c>a && c>b){
        console.log("katta son =", c);
    }
}

task6(4, 7, 5);
task6(9, 3, 10);
task6(5, 1, 4);