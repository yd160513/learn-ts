// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'

// 数组
let arr1: number[] = [ 1, 2, 3 ]
let arr2: Array<number> = [ 1, 2, 3 ] // Array 是 ts 提供的接口

// 元组: 特殊的数组，限制了数组元素的类型和个数
let tuple: [ number, string ] = [ 0, '1' ]
// 元组的越界问题 - 不建议这样操作
tuple.push(2) // 这里是不会报错的
console.log(tuple)
// 但是在访问的时候是会报错的
// tuple[2]

// 函数
let add = (x: number, y: number) => x + y // 通常返回值类型是可以省略的
let compute: (x: number, y: number) => number // 这里只是声明函数类型，没有具体实现
compute = (a, b) => a + b // 函数的实现

// 对象
// let obj: object = { x: 1, x: 2 } // 这样的 obj 类型是不可以的
let obj: { x: number, y: number } = { x: 1, y: 2 }
obj.x = 3

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()

// undefined, null: 官网上 undefined 和 null 是任何类型的子类型，所以它是可以被赋值为任何类型的，但是默认是不可以被赋值的，需要将 strictNullChecks 设置为 false。(https://www.typescriptlang.org/docs/handbook/2/basic-types.html#strictnullchecks)
let un: undefined = undefined // 被声明为 undefined 则不可以赋值为其他类型
let nu: null = null
// num = undefined // 这里会报错，默认是不可以被赋值的，需要将 strictNullChecks 设置为 false
// num = null

// void: 没有任何返回值
let noReturn = () => {
}

// any
let x

// never: 永远不会有返回值的类型
// 1. 抛出异常的函数，则这个函数永远不会有返回值
let error = () => {
  throw new Error('error')
}
// 2. 死循环函数
let endless = () => {
  while (true) {
  }
}