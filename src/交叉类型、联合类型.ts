interface DogInterface {
  run(): void
}
interface CatInterface {
  jump(): void
}
// 交叉类型: 取所有类型的并集
let pet: DogInterface & CatInterface = {
  run() {},
  jump() {}
}

// 联合类型: 可以为多个类型中的一个
let aab: number | 'string' // number 或者 string
// 字面量类型: 上边是限制变量的类型，这里是限制变量的取值在特定的范围内
// 字符串字面量联合类型
let bba: 'a' | 'c' | 's' // bba 的取值只能是这三者其中一个
// 数字字面量联合类型
let bab: 1 | 2
// 对象联合类型
class Dog implements DogInterface {
  run() {}
  eat() {}
}
class Cat implements CatInterface {
  jump() {}
  eat() {}
}
enum Master {
  Boy,
  Girl
}
function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog() : new Cat()
  pet.eat() // 这里 pet 被推导为 Dog 和 Cat 的联合类型，在类型未确定的情况下，就只能访问所有类型的共有成员。这里就是只能取所有类型的交集。
  return pet
}

// 可区分的联合类型: 结合了联合类型和字面量类型的类型保护方法。
// 核心思想: 如果一个类型是多个类型的联合类型并且每个类型之间有一个公共的属性，那么就可以凭借这个公共属性创建不同的类型保护区块
interface Square {
  kind: 'square'
  size: number
}
interface Rectangle {
  kind: 'rectangle'
  width: number
  height: number
}
interface Circle {
  kind: 'circle',
  r: number
}
type Shape = Square | Rectangle | Circle
// 为了防止新增一个 case，导致返回值为 undefined 的解决方案
// 1. 为函数定义具体的返回值: function area(s: Shape): number {}
// 2. 利用 never 类型，具体实现见下方
function area(s: Shape) {
  switch (s.kind) {
    case "rectangle":
      return s.width * s.height
    case "square":
      return s.size * s.size
    case "circle":
      return 123
    default:
      // 检查函数的参数是否是 never 类型，如果是 never 类型则说明前面的分支都覆盖到了，如果不是 never 类型则说明有遗漏，就需要补上对应的 case
      return ((e: never) => {throw new Error(e)})(s)
  }
}
area({kind: 'circle', r: 1})
