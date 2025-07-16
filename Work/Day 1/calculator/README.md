📟 Basic Calculator using CommonJS
📝 Task Overview
Create a simple calculator module using CommonJS in Node.js.
You will define two arithmetic functions and import them into the main file.

📁 Project Structure
cpp
Copy
Edit
/calculator-app
├── calculator.js   // Module file
├── app.js          // Main file
├── README.md       // Project README
🔧 Files & Code
1️⃣ calculator.js — Module File
Defines and exports two functions:

add(a, b)

multiply(a, b)

javascript
Copy
Edit
// calculator.js

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = { add, multiply };
2️⃣ app.js — Main File
Imports the calculator functions and prints results:

javascript
Copy
Edit
// app.js

const { add, multiply } = require('./calculator');

console.log('Addition of 5 and 3:', add(5, 3));
console.log('Multiplication of 4 and 2:', multiply(4, 2));
▶️ How to Run the Project
1️⃣ Open terminal in project directory
2️⃣ Run the command:

nginx
Copy
Edit
node app.js
✅ Sample Output:

Addition of 5 and 3: 8
Multiplication of 4 and 2: 8
📌 Note:
This project uses CommonJS syntax — the standard module system in Node.js.

No additional packages or setup required.