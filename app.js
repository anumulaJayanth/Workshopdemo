const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    if (req.url === "/") {
        if (req.method === "GET") { 
            res.statusCode = 200;
            res.write("This is the response from the server") 
            res.end(); 
        } 
    } else if (req.url === "/users") {
        if (req.method === "GET") {
            const users = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }];
            res.statusCode = 200;
            res.end(JSON.stringify(users));
        } else if (req.method === "POST") {
            res.statusCode = 201;
            res.end(JSON.stringify({ message: "User created successfully" }));
        }
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Route not found" }));
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
