// Fibanatchi ketma ketlik

function task23(num){
    let a = 0;
    let b = 1;
    let c = 0;
    for(let i=0; i<num; i++){
        c = a+b;
        a = c;
        b = b+a;
        i++;
    }
    if(num%2==0){
        console.log(b);
    } else {
        console.log(c);
    }
}

task23(15);
task23(10);