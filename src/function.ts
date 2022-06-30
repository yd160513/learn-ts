// 函数定义的方式
// 1. function 直接定义
function add1(x: number, y: number) {
  return x + y
}

// 2. 通过变量来定义函数的类型
let add2: (x: number, y: number) => number

// 3. 通过类型别名定义函数类型
type add3 = (x: number, y: number) => number

// 4. 接口定义函数类型
interface Add4 {
  (x: number, y: number): number
}

// 2/3/4 都是函数类型的定义，需要再有对应函数的具体实现

// 函数对参数的限制 - 严格限制
// add1(1, 2)

// 可选参数: 可选参数必须是必填参数的后面
function add5(x: number, y?: number) {
  return y ? x + y : x
}

/**
 * 函数参数默认值:
 * 1. 函数调用时，必填参数前的默认参数必须显式传入 undefined 才可以获取默认值；必填参数后的默认参数可以不填
 */
function add6(x: number, y = 2, z: number, q = 1) {
  return x + y
}

// 剩余参数
function add7(x: number, ...args: number[]) {
  return x + args.reduce((prev, curr) => prev + curr)
}
console.log(add7(1, 2, 3, 4, 5, 8))

/**
 * 函数重载: 函数名相同，参数个数或类型不同
 * TS 函数重载要求先定义一系列名称相同的函数声明
 */
// 多个声明
function add8(x: number, y: number): number
function add8(x: string, y: string): string
// 具体实现: 需要包含上面所有声明的所有类型
function add8(x: number | string, y: number | string) {
  if (typeof x === 'string' && typeof y === 'string') {
    return x + y
  }
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y
  }
}
console.log(add8('2', '2'))
