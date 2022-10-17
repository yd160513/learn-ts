// 基础类型推断: 根据右侧内容推断出左侧的类型
let b = [1]
let c = (x = 1) => x + 1

// 通用类型推断: 从多个类型中推断出一个类型的时候，TS 就会尽可能的推断出一个兼容当前所有类型的通用类型
let aa = [1, null]

// 上下文类型推断: 根据左侧绑定的事件，推断出右侧 event 的类型
window.onkeydown = (event: KeyboardEvent) => {
  console.log(event);
}

// 类型断言
interface Foo {
  bar: number
}
let foo = {} as Foo
foo.bar = 1 // 通过断言的形式，即使将给 bar 赋值这行代码去掉，使 foo 称为一个 {} TS 也不会报错，所以还是建议 foo: Foo 这样声明

// ---------------------------------------------------------

// 兼容性: 当一个类型 Y 可以被赋值给另一个类型 X 时，我们就可以说类型 X 兼容类型 Y
// X 兼容 Y: X(目标类型) = Y(源类型)
let s: string = 'a'
// s = null // 当关闭 strictNullChecks 时赋值为 null 则不会报错，就可以说字符串类型兼容 null 类型，也就是 null 是 string 的子类型

// 接口兼容性
interface X {
  a: any
  b: any
}

interface Y {
  a: any
  b: any
  c: any
}
let x1: X = {a: 1, b:2}
let y1: Y = {a: 1, b:2, c: 3}
x1 = y1 // 这样赋值没问题，X 兼容 Y。只要 Y 接口具有 X 接口的所有属性，即使 Y 有额外的属性，Y 仍然可以被认为是 X 类型。（鸭子类型）
// y1 = x1 // 这样赋值 TS 报错，Y 不兼容 X
// 总结: 源类型必须具备目标类型的必要属性就可以进行赋值。接口类型互相赋值时，成员少的可以兼容成员多的

// 函数兼容性: 三个条件: 参数个数、参数类型、返回值类型
type Handler = (a: number, b: number) => void
// Handler 是目标类型，要传入的参数就是源类型
function hof(handler: Handler) {
  return handler
}
// 1. 参数个数:
//    1.1. 目标类型的个数要多余源类型的个数
//    1.2. 固定参数兼容可选参数和剩余参数
//    1.3. 可选参数不兼容固定参数和剩余参数，strictFunctionTypes 设置为 false 可以兼容
//    1.4. 剩余参数兼容固定参数和可选参数
let handler1 = (a: number) => {}
hof(handler1) // 通过
let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2) // 不通过
let aaa = (a: number, b: number) => {}
let bbb = (a?: number, b?: number) => {}
let ccc = (...args: number[]) => {}
// 固定参数兼容可选参数和剩余参数
aaa = bbb
aaa = ccc
// 可选参数不兼容固定参数和剩余参数，strictFunctionTypes 设置为 false 可以兼容
// bbb = aaa
// bbb = ccc
// 剩余参数兼容固定参数和可选参数
ccc = aaa
ccc = bbb

// 2. 参数类型:
// 2.1 类型必须一样
// 2.2 当类型和个数都一样时，类型如果为对象，对应属性多的兼容少的；而不是属性少的兼容属性多的。前边接口兼容性中总结的是，接口成员少的兼容接口成员多的
//     如果需要兼容可以设置 strictFunctionTypes 为 false
// 2.3 函数参数之间可以相互赋值的情况被称为函数参数的双向协变，这种情况允许把一个精确的类型赋值给一个不精确的类型
let handler3 = (a: string) => {}
// hof(handler3) // 不可以，因为类型不兼容

interface Point3D {
  x: number
  y: number
  z: number
}
interface Point2D {
  x: number
  y: number
}
let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}
p3d = p2d
// p2d = p3d // 不兼容，对象属性多的兼容少的

// 3. 返回值类型:
// 3.1 目标函数的返回值类型必须和源函数的返回值类型相同，或者为其子类型
let ff = () => ({name: '1'})
let gg = () => ({name: '1', age: '2'})
ff = gg // 兼容，是它的子类型
// gg = ff // 不兼容

// 函数重载
// 目标函数
function overload(a: number, b: number): number
function overload(a: string, b: string): string
// 实现: 源函数
function overload(a: any, b: any): any {} // 兼容
// 不兼容: 返回值类型不兼容
// function overload(a: any, b: any){}
// 不兼容: 参数个数不兼容
// function overload(a: any, b: any, c: any): any {}

// ---------------------------------------
// 枚举兼容性
// 1. 枚举类型和数值类型互相兼容
// 2. 枚举之间互相不兼容
enum Fruit {
  Apple,
  Banana
}
enum Color {
  Red,
  Yellow
}
// 枚举类型和数值类型互相兼容
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
// 枚举之间互相不兼容
// let color: Color.Red = Fruit.Apple

// ---------------------------------------
// 类兼容性
// 1. 静态成员和构造函数是不参与比较的，如果两个类具有两个相同的实例成员，则它们的实例相互兼容
// 2. 两个类中含有私有成员，那么两个实例就不兼容了，只有父类和子类之间相互兼容
class AA {
  constructor(p: number, q: number) {
  }
  id: number = 1
  // 两个类中含有私有成员，那么两个实例就不兼容了，只有父类和子类之间相互兼容
  // private c: string = ''
}
class BB {
  static s = 1
  constructor(p: number) {
  }
  id: number = 1
  // 两个类中含有私有成员，那么两个实例就不兼容了，只有父类和子类之间相互兼容
  // private c: string = ''
}

let aaaa = new AA(1, 2)
let bbbb = new BB(1)
// 静态成员和构造函数是不参与比较的，如果两个类具有两个相同的实例成员，则它们的实例相互兼容
aaaa = bbbb
bbbb = aaaa
class CC extends AA{}
// 两个类中含有私有成员，那么两个实例就不兼容了，只有父类和子类之间相互兼容
let cccc = new CC(1, 2)
aaaa = cccc

// ---------------------------------------
// 泛型兼容性
// 1. 当接口中没有定义具体属性的时候，也就是一个空的接口的时候，两个实现是互相兼容的，一旦接口中有具体属性了，就不兼容了
interface Empty<T> {
  // value: T
}
let obj1: Empty<number> = {}
let obj2: Empty<string> = {}
obj1 = obj2
obj2 = obj1

// 泛型函数
// 1. 如果两个泛型函数的定义相同，但是没有指定类型参数，那么它们之间也是互相兼容的
let log1 = <T>(x: T): T => {
  console.log(x)
  return x
}
let log2 = <U>(y: U): U => {
  console.log(y)
  return y
}
log1 = log2

// --------------------------------------------------
// 总结:
// 1. 结构之间兼容: 成员少的兼容成员多的。（接口成员）
// 2. 函数之间兼容: 参数多的兼容参数少的。（函数参数为对象时，对象属性个数，多的兼容少的）

// ----------------------------------------------------------------------------------------------------
// 类型保护机制: 在特定的区块中保证变量属于某种确定的类型，可以在此区块中放心的引用此类型的属性，或者调用此类型的方法
// 1. instanceof 实例是否属于某个构造函数
// 2. in 属性是否属于某个对象
// 3. typeof 判断基本类型
enum Type {
  Strong,
  Week
}
class Java {
  helloJava() {
    console.log('hello java');
  }
  java: any
}
class JavaScript {
  helloJavaScript() {
    console.log('hello javaScript');
  }
  javaScript: any
}

// lang is Java: 这种返回值类型被称为类型谓词
function isJava(lang: Java | JavaScript): lang is Java {
  return (lang as Java).helloJava() !== undefined
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript()

  // instanceof
  // if (lang instanceof Java) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // in
  // if ('java' in lang) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // typeof
  // if (typeof x === 'string') {
  //   x.length
  // } else {
  //   x.toFixed()
  // }

  // 自定义类型保护函数
  if (isJava(lang)) {
    lang.helloJava()
  } else {
    lang.helloJavaScript()
  }
}
