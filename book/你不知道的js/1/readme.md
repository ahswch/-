# 第一部分 作用域和闭包 第一章、作用域是什么

## 对变量的引用

- LHS 引用：赋值操作的目标是谁
- RHS 引用：谁是赋值操作的源头

## 异常

- ReferenceError：作用域判别失败
  - RHS 查询再所有嵌套的作用域中遍寻不到所需变量时，引擎抛出
  - 同样情况 LHS 会在全局作用域自动创建该名称变量（严格模式下同样抛出错误）
- TypeError：作用域判别成功，但对结果的操作非法或不合理，如
  - 对一个非 ehjuu 类型的值进行函数调用
  - 引用 null 或 undefined 类型的值中的属性

## 小结

- 作用域时一套规则，用于确定在何处以及如何查找变量（标识符）。如果查找的目的时对变量进行赋值，那么就会使用 LHS 查询；如果目的时获取变量的值，就会使用 RHS 查询。=号操作符或调用函数时传入参数的操作都会导致关联作用域的赋值操作
- LHS 和 RHS 查询都会在当面执行作用域中开始，如果没找到标识符，就会向上级作用域查询目标标识符，每次上升一级作用域，最后抵达全局作用域，停止
