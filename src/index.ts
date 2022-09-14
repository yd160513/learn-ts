import './dataType'
import './enum'
import './interface'
import './function'
import './generics'

const hello: string = 'Hello Typescript'
const div = document.getElementById('app')
console.log(div)
if (div) {
    div.innerHTML = hello
}

/**
 * ts 新增类型:
 * 1. any
 * 2. void
 * 3. unknown
 * 4. never
 */

// 创建复杂类型的方式: 联合和泛型
// 联合类型，这样定义 MyBool 就会为 boolean 类型
// type MyBool = true | false
// // 联合类型的一个流行用例是描述允许值为 x | xxx | xx
// type State = 'open' | 'closed'
// type LockStates = 'locked' | 'unlocked'
// type Value = 1 | 2 | 3 | 4 | 5
// // 联合类型来处理不同类型的参数
// function getLength(obj: string | string[]) {
//     return obj.length;
//   }
// // 泛型
// // 泛型为类型提供变量，一个常见的例子是数组。没有泛型的数组可以包含任何内容。具有泛型的数组可以描述数组包含的值。
// type StringArray = string[]
// type NumberArray = number[]
// type ObjectWithNameArray = { name: string }[]
// // 使用泛型声明自己的类型
// interface Backpack<Type> {
//     add: (obj: Type) => void;
//     get: () => Type;
// }
// declare const backpack: Backpack<string>
// backpack.get()
// backpack.add('123')

// // TypeScript 的核心原则之一是类型检查关注值所具有的形状。这有时被称为“鸭式类型”或“结构化类型”。
// interface Point {
//     x: number;
//     y: number;
//   }
   
// function logPoint(p: Point) {
// console.log(`${p.x}, ${p.y}`);
// }
// // 相同数量可以
// const point = { x: 12, y: 26 };
// logPoint(point);
// // 大于接口数量也可以
// const point3 = { x: 12, y: 26, z: 89 };
// logPoint(point3); // logs "12, 26"
// // 小于接口数量不可以
// const point4 = { x: 12 };
// // logPoint(point4); // error

// 枚举: 一组有名字的常量集合

function flipCoin() {
    return Math.random() < 0.5;
}
