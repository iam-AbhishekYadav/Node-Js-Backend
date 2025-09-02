# # File System Module in Node.js

# # What is File System Module ?

- The fs (File System) module in Node.js provides an API for interacting with the file system.
- It allows you to perform operations such as reading, writing, updating, and deleting files.
- They are essential for server-side applications and scripts.

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
fs.method("file path", "data", "options");
```

### Synchronous Operation

**(1.)** **`Write `** 
- Write data to a file.
- If the file does not exist, it will be created.
- If the file exists, it overwrites the content.

#### Normal Method

``` js
const fs = require("fs")

const fileName = "Hello.txt"
const writeFile = fs.writeFileSync(fileName, "Hello World");

console.log(writeFile);
```

#### Using Path Module

``` js
const fs = require("fs")
const path = require("path")


const fileName = "Hello.txt";

const filePath = path.join(__dirname, fileName);
console.log(__dirname);

const writeFile = fs.writeFileSync(filePath, "Hello World");
console.log(writeFile);
```

**`Read`** 
**`Append`** 
**`Unlink`** 
**`Rename`** 


## Asynchronous 

- **`Definition`** : Code does not wait for a task to finish. Instead, it continues running and handles the result later (via callback, promise, or async/await).
- **`Non-blocking`** : Multiple tasks can run “in parallel” (actually handled via the event loop).
- **`Use case`** : Best for I/O tasks like reading files, making API calls, database queries, etc.
**`Benefit`** : Prevents blocking and allows Node.js to handle thousands of requests efficiently.













