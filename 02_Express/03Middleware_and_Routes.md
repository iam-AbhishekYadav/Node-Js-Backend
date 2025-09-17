# # What is Middleware ???

# # What is Routes ??



<img width="600" height="600" alt="Screenshot 2025-09-17 133401" src="https://github.com/user-attachments/assets/2823ae35-00dc-4167-aae5-d5c44185cd36" />


```mermaid
flowchart TD
    %% Nodes
    A["Server Start (index.js)"] --> B["Database Connection <br/> App <-- Mongoose --> Db <br/> (config/database.js)"]
    A --> C["Port (.env)"]
    A --> D["Path (routes)"]

    C -- "DB URL" --> B

    D --> E["Business Logic (controllers)"]

    E --> F[("Database")]
    E --> G["Models"]

    %% Styling
    classDef default fill:#111,color:#fff,stroke:#aaa,stroke-width:1px;
    classDef red fill:#111,color:#ff6b6b,stroke:#ff6b6b;
    classDef green fill:#111,color:#4ade80,stroke:#4ade80;
    classDef blue fill:#111,color:#60a5fa,stroke:#60a5fa;
    classDef orange fill:#111,color:#fbbf24,stroke:#fbbf24;
    classDef white fill:#111,color:#fff,stroke:#fff;

    %% Apply classes
    A:::red
    B:::blue
    C:::green
    D:::red
    E:::white
    F:::orange
    G:::white
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
