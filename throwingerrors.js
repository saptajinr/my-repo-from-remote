let json = '{"name": "Yoda", "age": 30}';
//let json ='{bad json}';
//let json = '{"age":20}';

try {
    let user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("'name' is required.");        
    } 
    
    errorCode;

    console.log("Nama: "+user.name);
    console.log("Umur: "+user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}