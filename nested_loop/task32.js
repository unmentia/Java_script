// A va B sonlar orasidagi palindrom

function task32(a, b){
    if(a>9 && b>9){
        for(let i=a; i<b; i++){
            let answer = 0;
            let temp = i;
            for(; temp>0;){
                answer = answer * 10 + (temp%10);
                temp = Math.floor(temp/10);
            }
            if(answer == i){
                console.log(i);
            }
        }
    }
}

task32(12, 50);