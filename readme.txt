Overview
--------

Your assignment for today, should you choose to accept it, is to implement a treeview component for viewing a file system file and directory hierarchy. The files included in this package are:

- filesystem.txt - you're reading me :)
- example1-3.png - examples of the desired functionality of the UI component
- package.json - lists out the dependencies of the test server
- server.js - a minimalist node.js server serving files from static/
- static/filesystem.json - a 18 MB JSON file containing the filesystem structure of a minimalist CentOs7 linux distribution
- static/index.html - a starting point for your UI project

Usage:

- Prerequisites: node.js installed

cd filesystem_homework
npm install
npm start

After this you have a server running on port 5050 serving static content from filesystem_homework/static. Open up the filesystem_homework/index.html to your favorite editor, and implement an XHR which fetches the filesystem.json from the server. After that, render the data.

Notes
-----
- The UI should work (at least) on WebKit-based browsers (Chrome/Safari)
- Plain old javascript (ECMAScript 2017) without any helper frameworks is encouraged
- Make sure the source code is clean, readable and contains comments whenever needed
- UI responsiveness and quickness is expected
- You should return _only_ the index.html (or any associated script/css files) - any modifications to server.js aren't accepted
