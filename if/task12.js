// Kichik yoki Katta alfavit

function task12(num){
    if(num >= 'a' && num <= 'z'){
        console.log("lowerCase");
    } else if(num >= 'A' && num <= "Z"){
        console.log("upperCase");
    } else {
        console.log("none");
    }
}

task12("a");
task12(122);
task12("B");