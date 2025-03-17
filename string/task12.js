// String byte array ga

function task12(){
    let str = "Mazgi";
    for(let i=0; i<str.length; i++){
        process.stdout.write(str.charCodeAt(i).toString() + " ");
    }
    console.log();
}

task12();