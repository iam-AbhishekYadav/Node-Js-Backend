# # URLs

# # What is URLs ?

- URLs stand for Uniform Resource Location, commonly termed as a web address
- It is a reference to a web resource that specifies its location on a computer network and a mechanism for retrieving it.
- URLs occur most commonly reference web pages (HTTP) but for file transfer (FTP), email(mailto), database access a application.

## URLs is composed of several fails, including

- **`Scheme`** --> The scheme indicates the protocol used to access the resource
- **`HostName`** --> The hostname is the name of the server hosting the resource
- **`Port`** --> The port number is an optional part of the URL that specifies the network port to use for the connection.
- **`Path`** --> It specifies the location of the resource on the server
- **`Query`** --> The query string is an optional part of the URL that contains date to be passed to the server
- **`Slug`** --> It can be called a resource or fragment which is an option URL

## Different parts of URLs

<img src="https://github.com/user-attachments/assets/e6791faf-95c1-47f6-95e6-594510526ca5" width="600" height="700">

# # How to handle different URLs in Node.js

In Node.js, different URLs can be handle using conditional statements and http module.

``` js
const http = require('http');

const Port = 3030;
const HostName = 'localhost';

const server = http.createServer((req, res) => {

	// Home Page
	// About Page
	// Product Page
	// Rest ---> Error

	
	if (req.url == '/') {
		res.statusCode = 200;
		res.setHeader('content-type', 'text/plain');
		res.end('Welcome to Node.js server by Abhishek Ydav');
	} else if (req.url == '/about') {
		res.statusCode = 200;
		res.setHeader('content-type', 'text/plain');
		res.end('About Page !!!');
	} else if (req.url == '/contact') {
		res.statusCode = 200;
		res.setHeader('content-type', 'text/plain');
		res.end('Contact Page !!!');
	} else if (req.url == '/product') {
		res.statusCode = 200;
		res.setHeader('content-type', 'application/json');
		res.end(JSON.stringify ({productName : "Product-1"}));
	} else {
		res.statusCode = 500;
		res.setHeader('content-type', 'text/plain');
		res.end('Server Error !!!');
	} 


});


server.listen(Port, () => {
	console.log(`Server Running at ${HostName} : ${Port}`);
});
``` 






