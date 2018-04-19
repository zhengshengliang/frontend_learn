# 1. CSS的学习思路
李爵士发明了html，他的同事发明了css
https://cdnjs.com/libraries/github-markdown-css
<body class="markdown-body">
  <h1>hello</h1>

  <h2>world</h2>
</body>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.css" media="print">

历史原因：
1. 刚开始人们只是写文章，然后打印机打印，就出现了媒体查询：media="print" 表示给打印机用的css
2. 后来需要图文混排： 就有了float
3. 绝对定位：position: absolute

CSS不正交


水平居中
1. child宽度不固定： 
margin-left: 20px;
margin-right: 20p;

2. 宽度固定
块级元素
margin-left: auto;
margin-right: auto

内联元素
parent: text-align:center
child: inline / inline-block


垂直居中
1. child高度确定
parent: padding-top: 20px; padding-buttom: 20px
2. child高度不确定
parent: padding-top: 20px; padding-buttom: 20px




parent高度确定就很难搞~~




















