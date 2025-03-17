// Berilgan indexdan oldingi charakter

function task3(inx){
    let str = "Dasturlash";
    console.log("index =", inx, "->", str.charAt(inx-1), "->", str.charCodeAt(inx-1));
}

task3(1);
task3(4);