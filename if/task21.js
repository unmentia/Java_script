// O'zaro teng sonlar

function task21(a, b, c){
    if(a==b && a!=c){
        console.log(c);
    } else if(a==c && a!=b){
        console.log(b);
    } else if(b==c && b!=a){
        console.log(a);
    } else {
        console.log(0);
    }
}

task21(1, 1, 2);
task21(1, 2, 1);
task21(2, 1, 1);
task21(1, 1, 1);
task21(1, 2, 3);