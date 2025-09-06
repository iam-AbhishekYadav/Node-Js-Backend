# # File System Module in Node.js

# # What is File System Module ?

- The fs (File System) module in Node.js provides an API for interacting with the file system.
- It allows you to perform operations such as reading, writing, updating, and deleting files.
- They are essential for server-side applications and scripts.


## File System CURD Operation

- **C**reate ---> Write content to the file. If does not exist, it create one.
- **R**ead ---> Reads the content of the file asynchronusly and logs it.
- **U**pdate ---> Appends new content to the file without overwriting the exixting content.
- **D**elete --->  Delete the file completely.

# # What is Synchronous and Asynchronous approach ?

- There are two methods to apporach File System Module
  - Synchronous
  - Asynchronous

## Synchronous

- **`Definition`** : Code runs line by line, one statement at a time.
- **`Blocking`** : The next line of code waits until the current one finishes.
- **`Use case`** : Good for simple scripts where tasks are quick.
- **`Problem`** : If a task takes too long (e.g., reading a big file), everything else is blocked until it finishes.


### Syntax :
``` js
fs.methodSync("file path", "data", "options");
```

### Synchronous Operation

**(1.)** **`Write`** 

- Write data to a file.
- If the file does not exist, it will be created.
- If the file exists, it overwrites the content.

#### Normal Method

``` js
const fs = require("fs")

const fileName = "Hello.txt"
const writeFile = fs.writeFileSync(fileName, "Hello World");

console.log(writeFile);                                                             // Output : A Hello.txt file is created With "Hello World" input
```

#### Using Path Module

``` js
const fs = require("fs")
const path = require("path")


const fileName = "Hello.txt";

const filePath = path.join(__dirname, fileName);
console.log(__dirname);

const writeFile = fs.writeFileSync(filePath, "Hello World");
console.log(writeFile);                                                             // Output : A Hello.txt file is created With "Hello World" input
```

**(2.)** **`Read`** 

- Read a file's content.
- Return it as a string or buffer.

``` js
const fs = require("fs")
const path = require("path")


const fileName = "Hello.txt";
const filePath = path.join(__dirname, fileName);


const readFile = fs.readFileSync(filePath);

console.log(readFile);                                                             // Output : <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64> 
console.log(readFile.toString());                                                  // Output : Hello World


const readFile2 = fs.readFileSync(filePath, "utf-8");

console.log(readFile2);                                                            // Output : Hello World
```

**(3.)** **`Append`** 

- Update the content of the file.
- If the file does not exist, it creates the file.

``` js
const fs = require("fs")
const path = require("path")


const fileName = "Hello.txt";
const filePath = path.join(__dirname, fileName);

const appendFile = fs.appendFileSync(filePath, "\nI am Abhishek Yadav");

console.log(appendFile);                                                             // Output : Update "Hello.txt" file.
```

**4.** **`Unlink`** 

- Delete a file by its path.
- It does not work on directories
- It is recommended to use fs.rmdir() to remove a directory.

``` js
const fs = require("fs")
const path = require("path")


const fileName = "Hello.txt";
const filePath = path.join(__dirname, fileName);

const deletefile = fs.unlinkSync(filePath);

console.log(deletefile);                                                              // Output : "Hello.txt" file is deleted/removed.
```

**5.** **`Rename`** 

- Rename file from one name to another.

``` js
const fs = require("fs")
const path = require("path")


const fileName = "Hello.txt";
const filePath = path.join(__dirname, fileName);

newUpdatedFileName = "UpdatedFile.txt";
const newFilePath = path.join(__dirname, newUpdatedFileName);


const renameFile = fs.renameSync(filePath, newFilePath);

console.log(renameFile);                                                              // Output : "Hello.txt" renamed by "UpdatedFile.txt"
```


## Asynchronous 

- **`Definition`** : Code does not wait for a task to finish. Instead, it continues running and handles the result later (via callback, promise, or async/await).
- **`Non-blocking`** : Multiple tasks can run “in parallel” (actually handled via the event loop).
- **`Use case`** : Best for I/O tasks like reading files, making API calls, database queries, etc.
**`Benefit`** : Prevents blocking and allows Node.js to handle thousands of requests efficiently.

### Syntax :
``` js
fs.method("file path", "data", "options", callback);
```

### Synchronous Operation

**(1.)** **`Write`** 

``` js
const fs = require("fs");
const path = require("path");

const fileName = "Hello.txt";
const filePath = path.join(__dirname, fileName);

const writeFile = fs.writeFile(
	filePath,
	"Hi, I am Abhsishek Yadav",
	"utf-8",
	(err) => {
        if(err) console.log(err);
        else console.log("No error, Code runs perfectly !!!");                                   // Output : No error, Code runs perfectly !!!
    }
);
```

**(2.)** **`Read`** 

``` js
const fs = require("fs");
const path = require("path");

const fileName = "Hello.txt";
const filePath = path.join(__dirname, fileName);

const readFile = fs.readFile(
	filePath,
	"utf-8",
	(err, data) => {
        if(err) console.log(err);
        else console.log("Data in Hello.txt file :", data);                                    // Output : Data in Hello.txt file : Hi, I am Abhsishek Yadav
    }
);
```






