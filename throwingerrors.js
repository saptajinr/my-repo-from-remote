let json = {"name": "Yoda", "age": 30};

try {
    let user = JSON.parse(json);
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}