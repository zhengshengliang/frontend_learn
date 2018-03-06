#!/usr/bin/env node

var fs = require('fs')

var dirName = process.argv[2] // 你传的参数是从第 2 个开始的
if (!fs.existsSync(dirName)) {
	fs.mkdirSync("./" + dirName) // mkdir $1
	process.chdir("./" + dirName) // cd $1
	fs.mkdirSync('css') // mkdir css
	fs.mkdirSync('js') // mkdir js

	fs.writeFileSync("./index.html", '<!DOCTYPE> \n<title>Hello</title> \n<h1>Hi</h1>')
	fs.writeFileSync("./css/style.css", 'h1{color: red;}')
	fs.writeFileSync("./js/main.js", 'var string = "Hello World" \nalert(string)')
	console.log('新生成了目录，返回 0');
	process.exit(0)
} else {
	console.log('要生成的目录已经存在，返回 1');
	process.exit(1)
}


/*
➜  local ls
demo.js demo.sh
➜  local ./demo.js xxx
新生成了目录，返回 0
➜  local ./demo.js xxx
要生成的目录已经存在，返回 1
➜  local ./demo.js xxx


➜  local tree xxx
xxx
├── css
│   └── style.css
├── index.html
└── js
    └── main.js

➜  local cat xxx/index.html 
<!DOCTYPE> 
<title>Hello</title> 
<h1>Hi</h1>%                                                                               
➜  local 

有点奇怪为什么后面都带了`%` ？
*/
