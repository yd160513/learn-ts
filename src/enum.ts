// 什么时候采用枚举类型: 将程序中不容易记忆的硬编码、在未来中可能改变的常量抽取出来定义为枚举类型
// 场景: 定义常量(请求 URL、文本提示信息)

// 数字枚举
// 默认情况下第一个元素的值就是 1，后面的元素递增
enum Role {
    Reporter,
    Developer,
    Maintainer,
    Owner,
    Guest
}
console.log(Role.Reporter) // 0
console.log(Role.Developer) // 1
// 也可以自定义第一个元素的值，后面的元素递增
enum Role1 {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
console.log(Role1.Reporter) // 1
console.log(Role1.Developer) // 2
/**
 * enum 可以看成是一个对象，产生这样的结果是: 反向映射
 * { 
        0: "Reporter"
        1: "Developer"
        2: "Maintainer"
        3: "Owner"
        4: "Guest"
        Developer: 1
        Guest: 4
        Maintainer: 2
        Owner: 3
        Reporter: 0
 * }
 */
console.log(Role)

// 字符串枚举
enum Message {
    Success = '成功了',
    Fail = '失败了'
}
/**
 * 字符串枚举没有反向映射
    Fail: "失败了"
    Success: "成功了"
 */
console.log(Message)

// 异构枚举: 字符串枚举和数组枚举混用 - 容易混淆，不建议使用
enum Answer {
    N,
    Y = 'Yes'
}

// 枚举成员的值是只读属性，不可被修改
// Message.Success = '1'

/**
 * 枚举成员的分类
 * 1. 常量枚举 - 在编译的时候计算出结果，以常量的形式出现在运行时环境
 * 1.1 没有初始值的情况
 * 1.2 对已有枚举值的引用
 * 1.3 常量的表达式
 * 2. computed number: 需要被计算的枚举成员 - 不会在编译阶段进行计算，而是会被保留到执行阶段
 *  > 就是一些非常量的表达式
 * 注意: 在 computed number 后面的枚举值一定需要有初始值，否则会报错
 */
enum Char {
    // 1. 常量枚举
    a, // 没有初始值
    b = Char.a, // 对已有枚举值的引用
    c = 1 + 3, // 常量的表达式
    // computed number
    d = Math.random(),
    e = '123'.length,
    // f // 在 computed number 后面的枚举值一定需要有初始值，否则会报错
}

/**
 * 常量枚举
 * 特性: 在编译阶段会被移除
 * 作用: 当我们不需要一个对象，而只需要对象值的时候，就可以使用，这样可以减少在运行环境的代码
 */
const enum Month {
    Jan,
    Feb,
    Mar
}
// 这段代码在运行时只有这些，而不会有上面声明的枚举类型，这里的枚举值会被直接替换为所对应的常量
const month = [Month.Jan, Month.Feb, Month.Mar]

/**
 * 枚举类型: 在某些情况下，枚举和枚举成员都可以作为单独的类型存在
 * 1. 枚举成员没有任何初始值
 * 2. 所有枚举成员都是数字枚举
 * 3. 所有枚举成员都是字符串枚举
 * 注意: 
 * 1. 两种不同的枚举不可以进行比较
 * 2. 两种不同的枚举成员不可以进行比较
 * 3. 字符串枚举的取值只能是枚举成员的类型
 */
// 枚举成员没有任何初始值
enum E {a, b}
enum F {a = 0, b = 1}
enum G {a = 'apple', b = 'orange'}

// 可以把任意的 number 类型赋值给枚举类型，它的取值也可以超出枚举成员的定义
let e: E = 3
let f: F = 123
// 注意: 两种不同的枚举不可以进行比较，因为 e 属于 E，f 属于 F
// e === f 

let e1: E.a = 1
let e2: E.b = 2
let e3: E.a = 3
// e1 === e2 // 注意: 两种不同的枚举成员不可以进行比较，因为 e1 属于 E.a，e2 属于 E.b
e1 === e3 // 两个相同的枚举成员才可以进行比较

// 注意: 字符串枚举的取值只能是枚举成员的类型
let g1: G = G.b
let g2: G.a = G.a

// 权限控制
function initByRole(role: Role1) {
    if (role === Role1.Reporter || role === Role1.Developer) {

    } else if (role === Role1.Maintainer || role === Role1.Owner) {

    } else if (role === Role1.Guest) {

    } else {

    }
}