# # Path Module in Node.js

# # What is Path Module ??

- The Path module is a built-in Node.js module
- It is provides tools for handling and transforming file paths across different operating systems.

<img width="449" height="337" alt="nodejs-path-module" src="https://github.com/user-attachments/assets/e547a57c-d248-4ec0-9448-6185266fdf32" />


## Special Node.js Constants

**(i)** **`__filename`** ---> It provides the absolute path of the currently executing file.  
**(ii)** **`__dirname`** ---> It provides the absolute directory path of the currently executing file. 

``` js
const path = require("path");

console.log(__dirname);                   // Output : D:\Desktop\Backend\server_02
console.log(__filename);                  // Output : D:\Desktop\Backend\server_02\path.js
```


## Path Module Methods/Features

Differnt types of method in path module.  

<img width="700" height="800" alt="Screenshot 2025-09-02 234625" src="https://github.com/user-attachments/assets/9694fd02-aebc-4d03-a735-abf085ce0b14" />

``` js
const path = require("path");

const filepath = path.join("folder", "student", "data.txt");
console.log(filepath);

const parseData = path.parse(filepath);
const resolvedPath = path.resolve(filepath);
const extname = path.extname(filepath);
const basename = path.basename(filepath);
const dirname = path.dirname(filepath);


console.log("Parse Data :\n",parseData);                         // Output : Parse Data :
                                                                 //            {
                                                                 //             root: '',
                                                                 //             dir: 'folder\\student',
                                                                 //             base: 'data.txt',
                                                                 //             ext: '.txt',
                                                                 //             name: 'data'
                                                                 //           }

console.log("Resoved Path :",resolvedPath);                      // Output : Resoved Path : D:\Desktop\Backend\server_02\folder\student\data.txt
console.log("Extension Name :", extname);                        // Output : Extension Name : .txt
console.log("File Name :", basename);                            // Output : File Name : data.txt
console.log("Directory name of a Path :",dirname);               // Output : Directory name of a Path : folder\student

```







