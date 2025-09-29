# # Express

# # What is Express ?

It is the most popular Node.js web application framework, designed for building web applications and APIs.

## Key Characteristics:

- Minimal and flexible
- Unopinionated (you decide how to structure your app)
- Lightweight and fast
- Extensible through middleware
- Huge ecosystem of plugins and extensions


# # Why Choose Express.js?

Express provides a thin layer of fundamental web application features without obscuring Node.js features.

## It offers:

- A robust routing system
- HTTP helpers (redirection, caching, etc.)
- Support for middleware to respond to HTTP requests
- A templating engine for dynamic HTML rendering
- Error handling middleware

# # Environment Setup

- Make sure Node.js installed in the system  
  `node -v              // Output : v22.7.0`
  
- Create a new directory and navigate inside the directory.  
  `mkdir hello_world`  
  `cd hello_world`

- Install new Node.js Project and Install Express  
  `npm init -y`
  `npm install express`

# # Create first Hello World

- This server is run by `node index.js`
- This server is run on `localhost:3000`

``` js
const express = require("express");     // Import Express

const app = express();     // Create instance of Express

const Port = 3000;     // Define Port 
const HostName = 'loacahost';     // Define HostName

app.get('/', (req, res) => {     // Create a route with response "Hello World"
    res.send("Hello World !!!");
});


app.listen(Port, () => {     // Star the server and listen for incoming request. 
    console.log(`Server is Running ay ${HostName} : ${Port}`);
})
```