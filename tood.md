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