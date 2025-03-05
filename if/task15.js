// Uchburchakning tomonlari

function task15(a, b, c){
    if(a>0 && b>0 && c>0){
        if(a+b>c && a+c>b && b+c>a){
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

task15(20, 25, 30);
task15(120, 10, 20);