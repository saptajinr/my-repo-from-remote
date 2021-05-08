class ValidationError extends error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
let json = '{"age":30}';

try {
    let user = JSON.parse(json);

    if (!user.name) {
        throw new ValidationError("'name' is required.");        
    }
    
    if (!user.age) {
        throw new ValidationError("'age' is required.");
    }
    
    console.log("Nama: "+user.name);
    console.log("Umur: "+user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}