// 3ta son

function task26(a, b, c){
    if(a>0 && b>0 && c>0){
        if(a%2!=0 && b%2!=0 && c%2!=0){
            console.log(1);
        } else if(a%2==0 && b%2==0 && c%2==0){
            console.log(2);
        } else if((a%2!=0 && b%2==0 && c%2==0) || (b%2!=0 && a%2==0 && c%2==0) || (c%2!=0 && a%2==0 && b%2==0)){
            console.log(3);
        } else {
            console.log(0);
        }
    }
}

task26(1, 3, 5);
task26(2, 4, 6);
task26(1, 2, 4);
task26(1, 2, 3);