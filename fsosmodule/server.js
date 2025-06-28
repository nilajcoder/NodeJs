var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
console.log(user.username);
console.log(os.hostname())

console.log(os.machine())
console.log(os.type())
console.log(os.version())
console.log(os.arch())

fs.appendFile('greeting.txt', 'Hi ' + user.username + '!\n', () => {
  console.log('file is created')
});


/*

📦 In Node.js:
Both fs and os are built-in core modules — you don't need to install them with npm.

📁 fs (File System Module)
The fs module lets you work with the file system: reading, writing, updating, deleting files and folders.

💻 os (Operating System Module)
The os module gives you information about your system (like CPU, memory, user, hostname, etc).
*/
/*

[Object: null prototype] {
  uid: -1,
  gid: -1,
  username: 'nilaj',
  homedir: 'C:\\Users\\nilaj',
  shell: null
}
nilaj
hp
x86_64
Windows_NT
Windows 11 Home Single Language
x64
file is created

*/