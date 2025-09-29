// Import Express and Create instance of Express
const express = require("express");
const app = express();

// Import database
const connectWithDb = require("../Blog/config/database");
connectWithDb();

// Middleware --> It is always above the Route
app.use(express.json());

// Import routes and Mount
const blog = require("../Blog/routes/blogRoutes");
app.use("/api/v1", blog);

// Load configuration from env file and Port
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Defult Route 
app.get("/", (req, res) => {
    res.send(`<h1> This is HOMEPAGE baby</h1>`);
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});


