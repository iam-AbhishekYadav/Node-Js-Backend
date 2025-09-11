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
    if (req.url == "/") res.write('<h1> Hello, Node.js !!! </h1>');
    else res.end();
});

server.listen(500);

console.log("The http server is running on port 500");        
```

# # Features of HTTP method

- Create an HTTP server using `http.createServer()`
- Listen to incoming request using the `server.listen()` method
- Handle incoming requests and send responses using the `request` and `response` object passed to the server's request event
- Set headers on the response object using `response.setHeader()`
- Write data to the response object using `response.write()`
- End the response using `response.end()`
- Send an HTTP request to a server using `http.request()`

``` js
const http = require("http");                                  // getting the http module

const port = 3000;                                             // initializing the port no.
const host = "localhost";                                      // define the hostname

const server = http.createServer ((req, res) => {              // create server 
res.statusCode = 200;                                          // set to 200 to indicate it is successful 
res.setHeader("Content-type", "text/plain");                   // set content type to plain text 
res.end("hello world");                                        // end with 'hello world' text return
});

server.listen(port, () => {                                    // list to the define port.
console.log(`Server running at $(host): S(port)`);
});
```







