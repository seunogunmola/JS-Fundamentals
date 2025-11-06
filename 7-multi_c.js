const args = process.argv.slice(2);
let count = args[0];
if(isNaN(count)){
    console.log("Missing number of occurrences");
}

let i = 0;
while(i < count){
    console.log("C is fun");
    i++;
}