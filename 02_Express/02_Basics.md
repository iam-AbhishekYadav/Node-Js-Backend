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
  - `**Logging**` : It can be used to log information about incoming requests and outgoing responses.
  - `**Authentication**` : It can be used to authenticate users, check if they are authorized to access
certain resources, and redirect them to login pages if necessary.
  - `**Parsing**` : It can be used to parse incoming request bodies, such as JSON, XML, or form data.
  - `**Error handling**` : It can be used to handle errors and exceptions that occur during the request/
response cycle.
# # What is Routes ??


# # How to connect Express and MongoDB ??

- We can connect Express and MongoDB by Mongoose
- Install Mongoose by CMD --> `npm install mongoose`

``` js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/carsDB', {useNewUrlParser: true, useUnifiedTopology: true})

    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
``` 
