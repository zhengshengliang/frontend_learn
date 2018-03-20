1. css href
2. 四种方式
3. ul list-style: none
4. border大法
5. clearfix: 子元素float: left,在子元素的爸爸上添加clearfix类
6.  first > second > third 必须是儿子
7. 浏览器， 默认font-size: 16
8. 防抖 提前设置padding
9. inherit 子元素自动继承父元素的font-size


一个元素的高度是由 它内部文档流元素高度决定的
文档流：内联元素从左往右 块级元素自上往下另起一行


内联元素的高度基本不可测的


```
<span>Hello</span>
{
	display: inline-block;
	width: 100px; /*  不要写高宽 */
	height: 200px; /*  不要写高宽 */
}
```
用 paddind 发多少 三角形
HTML 结构为 div.parent > div.child
如果 div.parent 的样式为
width: 1000px; padding: 100px;




css盒模型理解