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

# # Ports
# # Rest API

# # What is Rest API ?

- **`REST`** ---> Representational State Transfer
- **`API`** ---> Application Programming Interface
- REST API is commonly known as RESTful API
- REST API is define as an interface that two computer systems use to exchange information securely over the internet.

# # What is Middleware ???

- In Express, middleware refers to a function that processes incoming HTTP requests and can perform various actions such as
modifying the request or response objects, invoking the next middleware function in the chain, or sending a response to the client.
- Middleware functions can be used to perform a variety of tasks, such as:
  - **`Logging`** : It can be used to log information about incoming requests and outgoing responses.
  - **`Authentication`** : It can be used to authenticate users, check if they are authorized to access
certain resources, and redirect them to login pages if necessary.
  - **`Parsing`**` : It can be used to parse incoming request bodies, such as JSON, XML, or form data.
  - **`Error handling`** : It can be used to handle errors and exceptions that occur during the request/
response cycle.

## How to use Middleware

```js
app.use(express.json());
```


# # What is Routes ??

- Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
- Each route can have one or more handler functions, which are executed when the route is matched.
- **Syntax** ---> `app METHOD (PATH, HANDLER);`


``` js
// Respond with Hello World on the homepage
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Respond to POST request on the root route (/)
app.post('/', (req, res) => {
  res.send('Got a POST request')
})

// Respond to a PUT request to the /user route
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

// Respond to a DELETE request to the /user route
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})
```

# # What is MVC ?

- **`MVC`** ---> Model-View-Controller
- It  is a software architectural pattern used in web development to separate the application's concerns into three interconnected components.
- Here's a brief overview of each component :-
  - **`Model`** : This component represents the data and business logic of the application.
  - **`View`** : This component defines the presentation and user interface of the application.
  - **`Controller`** : This component acts as an intermediary between the model and the view. I

## Optimal Folder Structure

<img src="https://github.com/user-attachments/assets/c3c4967b-1a76-4168-9d22-89a5c7bc8654" width="500" height="500">

# # How to Export ?

In an Express backend application, there are several ways to export functions or objects :-

**`(i)`** Exporting a function or object directly : 
``` js
module.exports = myObject;
```

**`(ii)`** Exporting multiple functions or objects : 
``` js
// Exporting multiple functions
exports.myFunction1 = myFunction1; exports.myFunction2 = myFunction2;

// Exporting multiple objects
exports.myObject1 = myObject1; exports.myObject2 = myObject2;. 
```

**`(iii)`** Exporting a default function or object :
``` js
module.exports = myObject;
```


# # How to connect Express and MongoDB ??

- We can connect Express and MongoDB by Mongoose
- Install Mongoose by CMD --> `npm install mongoose`

``` js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/carsDB', {useNewUrlParser: true, useUnifiedTopology: true})

    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
``` 
































