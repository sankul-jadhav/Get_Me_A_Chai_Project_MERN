function greet(name) {
    console.log("Hello " + name);
}

function start(callback) {
    console.log("Starting...");
    
    callback("Sankul");
}

start(greet);