# learn-ts
Typescript 的学习笔记
## 类型注解
### 作用
    相当于强类型语言中的类型声明
### 语法
    (变量/函数): type
## 泛型
### 定义
    不预先确定的数据类型，具体的类型在使用的时候才能确定
### 理解
    泛型与函数的参数等同对待，是另一个维度的参数，代表类型而不是代表值的参数
### 作用
    1. 函数和类可以轻松地支持多种类型，增强程序的扩展性
    2. 不必写多条函数重载，冗长的联合类型声明，增强代码可读性
    3. 灵活控制类型之间的约束
## 引入非 TS 写的类库时，提示没有声明文件
> 大部分类库的声明文件社区都有
```
npm install -D @types/jquery // npm install -D @types/依赖包的名称
```
## 监听 ts 热更新
```
npm install -D ts-node-dev
```
## 类型检查工具
```
npm i -D tsd

import { expectType } from 'tsd'

expectType<string>('xxx') // ✔️
expectType<string>(123) // ×
```