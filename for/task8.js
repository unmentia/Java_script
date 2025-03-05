// a va b sonlar orasida 3ga bo'linadiganlar

function task8(a, b){
    let sum = 0;
    let count = 0;
    for(let i=a; i<b; i++){
        if(i%3 == 0){
            sum+=i;
            count++;
        }
    }
    console.log("yig'indi =", sum);
    console.log("soni =", count);
}

task8(4, 15);
task8(24, 31);