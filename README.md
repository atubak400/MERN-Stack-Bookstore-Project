# MERN STACK BOOK STORE PROJECT

![Mern Stack](./img/1.jpeg)

## What is MERN STACK
The MERN stack is a full-stack web development framework that utilizes MongoDB as the database, Express.js as the web application framework, React.js for building user interfaces, and Node.js as the runtime environment.

## Initial Project Structure

![Project structure](./img/4.png)

> Step 1: Navigate to backend directory and run:

```
cd ./backend
```
```
npm init -y
```

![npm init](./img/2.png)

> Step 2: Navigate to package.json in backend directory and add `"type": "module",`

![add module](./img/3.png)

> Step 3: Still in package.json in backend directory. Remove the test scripts and add these scripts: 

```
"start": "node index.js",
"dev": "nodemon index.js"
```

![add module](./img/5.png)

> Step 4: Install Express and Nodemon 

```
npm install express --save
```
```
npm install -g nodemon
```

> Step 5: Create index.js and config.js in the backend directory and fill them with the content below:

```
code ./backend/index.js ./backend/config.js
```

![index.js](./img/6.png)
![config.js](./img/7.png)

> Step 6: Run your application using the "dev" script added ealier

```
npm run dev
```
![npm run dev](./img/8.png)

> Step 7: visit on your browser:

```
http://localhost:5555/
```

![npm run dev](./img/9.png)

_The "Cannot GET /" error in Express typically indicates that there is no defined route for the requested URL, and you need to ensure that your routes are properly set up in your Express application._