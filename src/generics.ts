// 泛型定义函数
function log<T>(val: T): T {
    return val
}

// 泛型调用第一种方式
log<string>('123')
// 泛型调用第二种方式: 第一种方式的优化，采用类型推导 - 推荐
log('123')

// 泛型定义函数类型(泛型函数的定义): 采用类型别名
type Log = <T>(val: T) => T
// 泛型函数的实现
let myLog: Log = log

// 泛型接口
interface MyLog {
    <T>(val: T): T // 这里的泛型约束的是函数
}

// 采用泛型接口来约束接口的其他成员
interface MyLog1<T> { // 这里约束的是泛型的所有成员
    (val: T): T
}
// 实现的时候需要给一个具体的类型
let myLog1: MyLog1<string> = log


// 采用泛型接口也可以有默认类型
interface MyLog1<T = number> { // 这里约束的是泛型的所有成员
    (val: T): T
}
let myLog2: MyLog1 = log
myLog2(2)

// 泛型约束
interface Length {
    length: number
}
// 这里的 T 继承了 Length 接口，表示 T 受到了一定的约束(输入的值一定要有 length 属性)
function con<T extends Length>(val: T): T {
    console.log(val)
    console.log(val.length)
    return val
}
con([])
con('')
// con(123) // error
