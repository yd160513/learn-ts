// 映射类型: 从一个旧的类型生成一个新的类型。本质上一种预先定义的泛型接口

interface Obja {
  a: string
  b: number
  c: boolean
}
// 把一个类型中的所有属性变成只读
type ReadonlyObj = Readonly<Obja>
// Readonly 泛型的实现:
// type Readonly<T> = {
//   索引签名: P in keyof T,
//   keyof T 就是索引类型的查询操作符，表示 T 的所有公共属性的联合类型，
//   P in 相当于执行了一次 for in 操作，把变量 P 依次绑定到 T 的所有属性上，
//   索引签名的返回值，就是索引访问操作符: T[P]: 属性 P 所代表的的属性
//   readonly [P in keyof T]: T[P];
// };

// 把一个接口的所有属性变成可选的
type PartialObj = Partial<Obja>
// Partial 的实现
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

// 抽取 Obj 的子集: 抽取 a 和 b
type PickObj = Pick<Obja, 'a' | 'b'>
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

// Readonly、Partial、Pick 被称为同态: 它们只会作用于 Obj 的属性，并不会引入新的属性

// ---------------
// 非同态类型
// Record 创建一个新的类型，类型的属性由第一个参数指定，属性的类型就是第二个参数
type RecordObj = Record<'x' | 'y', Obja>
