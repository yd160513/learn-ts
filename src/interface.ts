/**
 * 接口:
 * 1. 对象类型的接口
 * 2. 函数类型的接口
 */
// ------------ 对象类型的接口 ------------
interface List {
  id: number,
  name: string
}

interface Result {
  data: List[]
}

interface List1 {
  id: number,
  name: string,

  [x: string]: any // 字符串索引签名
}

interface Result1 {
  data: List1[]
}

function render1(result: Result1) {
  result.data.forEach(value => {
    console.log(value.id, value.name)
  })
}

function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name)
  })
}

let result = {
  data: [
    { id: 1, name: 'A', sex: 'male' }, // 鸭子类型: 只要满足接口的必要条件，即使多出也没有关系
    { id: 2, name: 'B' }
  ]
}
render(result)

// 上述如果直接传入对象字面量的话 TS 则会报错
// render({
//   data: [
//     { id: 1, name: 'A', sex: 'male' },
//     { id: 2, name: 'B' }
//   ]
// })
/**
 * 解决办法:
 * 1. 向上边那样将对象字面量赋值给一个变量，然后将变量传入
 * 2. 使用类型断言
 * 3. 使用字符串索引签名 - 见 interface List1
 */
// 2. 使用类型断言 - 明确告诉编译器参数的类型
render({
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }
  ]
} as Result)
// 2. 类型断言的另一种写法 - 在 React 中会产生歧义
render1(<Result>{
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }
  ]
})

// 接口成员属性
interface List2 {
  readonly id: number, // 只读属性
  name: string,
  age?: number // 可选属性
}

interface Result2 {
  data: List2[]
}

function render2(result: Result2) {
  result.data.forEach(value => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
  })
}

let result1 = {
  data: [
    { id: 1, name: 'A', sex: 'male' }, // 鸭子类型: 只要满足接口的必要条件，即使多出也没有关系
    { id: 2, name: 'B' }
  ]
}
render2(result1)

/**
 * 可索引类型的接口: 当接口中的成员个数不确定的时候采用
 * 1. 数字索引签名
 * 2. 字符串索引签名
 * 注意: 数字索引签名的返回值一定是字符串索引签名的返回值的子类型，因为 JS 会将 number 转换为 string
 */
// 1. 数字索引签名 - 字符串数组
interface StringArray {
  // 数字索引签名: 返回值
  [index: number]: string
}

// 2. 字符串索引签名
interface Names {
  // 字符串索引签名: 返回值
  [x: string]: number, // 这样就不能再声明一个 number 类型的成员了
  // y: number
  // 但是两种索引方式可以混用
  [x: number]: number
  // 注意: 当混用时，数字索引签名的返回值一定是字符串索引签名的返回值的子类型，因为 JS 会将 number 转换为 string
}

// ------------ 函数类型的接口 ------------
// 1. 用变量定义函数的类型
// let addFun: (x: number, y: number) => number
// 2. 用接口来定义函数的类型
// interface AddFun {
//   (x: number, y: number): number
// }
// 3. 用类型别名来定义函数的类型
type AddFun = (x: number, y: number) => number

let addFun: AddFun = (a, b) => a + b

// 混合类型的接口: 既可以定义一个函数，也可以像对象一样拥有属性和方法
interface Lib{
  (): void // Lib 是一个函数
  version: string // 有一个 version 属性
  doSomething(): void // 有 doSomething 方法
}
// Lib 接口的实现
let lib: Lib = (() => {}) as Lib // 采用类型断言的原因: 当给 lib 按照接口定义的内容都声明了之后，TS 还是会提示少属性，所以采用类型断言
lib.version = 'v1'
lib.doSomething = () => {}
// 上述 lib 的实现对全局暴露了一个变量 lib，优化一下:
function getLib() {
  let lib: Lib = (() => {}) as Lib // 采用类型断言的原因: 当给 lib 按照接口定义的内容都声明了之后，TS 还是会提示少属性，所以采用类型断言
  lib.version = 'v1'
  lib.doSomething = () => {}
  return lib
}
const lib1 = getLib()
lib1()
lib1.version = 'v2'
lib1.doSomething()
