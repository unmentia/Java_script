// 2 tasini solishtirish

function task27(a, b, c){
    if(a>0 && b>0 && c>0){
        if((a%2==0 && b%2==0 && c%2!=0) || (a%2==0 && c%2==0 && b%2!=0) || (b%2==0 && c%2==0 && a%2!=0)){
            console.log(1);
        } else if((a%2!=0 && b%2!=0 && c%2==0) || (a%2!=0 && c%2!=0 && b%2==0) || (a%2==0 && b%2!=0 && c%2!=0)){
            console.log(2);
        } else{
            console.log(0);
        }
    }
}

task27(8, 2, 9);
task27(16, 21, 17);
task27(2, 24, 86);