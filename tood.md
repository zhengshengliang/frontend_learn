## css 优先级
element UI 自升级2版本以后，table默认添加白色背景色
```
.el-table tr {
    background-color: #fff;
}
```

想修改它: ->

```
.el-table tr.info-row-red {
    background-color: #ffc9c8;
}

.el-table tr.info-row-green {
    background-color: #ccffcc;
}
```

css会应用按更精确的样式

## js中的三个点`...`代表什么


## 三目运算
```
//将布尔值改为0，1传给后端
let setDefaultWh = '0';
if (this.state.checked) {
    setDefaultWh = '1';
}
```

转换为下面这种写法

```
let setDefaultWh = this.checked ? 1 : 0
```


sass  synatac awesome style sheet
手机上适配 用 rem
 sass里可以用函数转换rem
 安装需要ruby 或使用淘宝镜像
