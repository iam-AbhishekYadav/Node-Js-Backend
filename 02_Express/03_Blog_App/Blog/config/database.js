const mongoose = require("mongoose");
require("dotenv").config();

const connectWithDb = () => {
	mongoose.connect(process.env.DATABASE_URL)

		.then(() => {
			console.log("Db is succesfully connected !!!");
		})
		.catch((error) => {
			console.log("Issue in DB Connection !!!");
			console.log(error.message);
			process.exit(true);
		});
};


module.exports = connectWithDb;
