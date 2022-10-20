let objobj = {
  a: 1,
  b: 2,
  c: 3
}

// 抽取对象中的某些属性组成一个数组
function getValues(obj: any, keys: string[]) {
  return keys.map(key => {
    return obj[key]
  })
}
// 这样定义当 keys 传入的为 obj 中不存在的元素时会返回 undefined
console.log(getValues(objobj, [ 'b', 'a' ]));
console.log(getValues(objobj, [ 'e', 'f' ]));

// 索引类型的查询操作符: keyof T: 类型 T 的所有公共属性的字面量的联合类型
interface Obj {
  a: number,
  b: number
}
let key: keyof Obj // key 的类型就是 "a" | "b" 字面量的联合类型

// 索引访问操作符: T[K]: 对象 T 的属性 K 所代表的类型
let value: Obj['a'] // number 类型

// 泛型约束: T extends U: 泛型变量通过继承某个类型获得某些属性

// TS 限制只能获取 obj 中已有的属性
function getValues2<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => {
    return obj[key]
  })
}
console.log(getValues2(objobj, [ 'b', 'a' ]));
// console.log(getValues2(objobj, [ 'e', 'f' ]));