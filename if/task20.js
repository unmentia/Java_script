// Sonlarni taqqoslab tashlang

function task20(a, b, c){
    if(a<b && b<c){
        console.log(1);
    } else if(a>b && b>c){
        console.log(2);
    } else if(b>a && b>c){
        console.log(b);
    } else if(a==b && b==c){
        console.log(5);
    } else {
        console.log(0);
    }
}

task20(1, 2, 3);
task20(3, 2, 1);
task20(1, 3, 2);
task20(1, 1, 1);
task20(2, 2, 1);