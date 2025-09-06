# # Http Module

# # What is Http Module ?

- **`HTTP`** ---> Hypertext Tranfer Protocol
- It is a protocol used for transmitting data over the internet.
- HTTP defines how clients and servers communicate with each other and how requests and responses should be formatted and transmitted.
- It is the foundation of data communication for the World Wide Web or the internet.
 
<img src="https://github.com/user-attachments/assets/ac6587c0-6f5d-44e4-8902-5de1416fc813" width="500" height="300">


## How make server using Http module.

- After Code runs
- Go localhost:500
- A web page is created 

``` js
const http = require("http");

const server = http.createServer((req, res)=>{
    if (req.url == "/") res.write('<h1>Hello, Node.js !!!</h1>');

    else res.end();
});

server.listen(500);

console.log("The http server is running on port 500");        
```
