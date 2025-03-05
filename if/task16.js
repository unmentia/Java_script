// Uchburchak shakli

function task16(a, b, c){
    if(a>0 && b>0 && c>0){
        if(a==b && b==c){
            console.log("equilateral");
        } else if(a==b || a==c || b==c){
            console.log("isoscales");
        } else {
            console.log("scalene");
        }
    }
}

task16(10, 10, 10);
task16(10, 15, 10);
task16(25, 10, 15);