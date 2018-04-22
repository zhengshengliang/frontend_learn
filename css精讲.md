
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



flex布局很重要

parent高度确定就很难搞~~

垂直居中的秘诀：一定不要把父元素的高度写死~~~



2.宽度与高度
no break space: &nbsp;
&nbsp; 与字体设计师的设计有关，有的字体两个&nbsp;代表一个字，有的却要三个
em一般也与字体设计有关，一般不用； em跟中文很好的对应 1：1  英文不合适

text-align: justify: 文字显示两边对齐； 注意如果只有一行字，则不会有效果，需要多行。


对内联元素设置宽度是没用的；需要先将其设置成内联元素 display: inline-block;

对齐姓名，联系方式这样的表单
http://js.jirengu.com/zuliguqahu/8/edit?html,output




<!DOCTYPE html>
<html>

  <meta charset="utf-8">
  <title>JS Bin</title>
  <style>
    div {
      border: 1px solid red;
      font-size: 20px;
      display: inline-block;
    }
    span {
      border: 1px solid green;
      display: inline-block;
      width: 4em;
      text-align: justify;
      line-height: 20px;
      height: 20px;
      overflow: hidden;
      
    }
    span:after {
      content: '';
      display: inline-block;
      width:100%;
      border: 1px solid blue;
    }
    p {
      text-align: justify
    }
  </style>

<div>
  <span>姓名</span> <br />
  <span>联系方式</span>
  <p>年后佛IE哈佛I及诶副经理放假了放假了减肥付额外I及范围就发了文件了文件发文件房东可说解放路的fwe问问fwefwefewfefdfwfewfewf设计费讲述了房间里的时间范fewfewfwefwefsfweg非文件佛I及为of囧恩文件覅偶尔我就微服务二纺机非我放假非甲方</p>
</div>
</body>
</html>



















