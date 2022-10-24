// T extends U ? X : Y

type TypeName<T> =
  T extends string ? 'string' :
    T extends number ? 'number' :
      T extends boolean ? 'boolean' :
        T extends undefined ? 'undefined' :
          T extends Function ? 'function' :
            'object'
type T1 = TypeName<string> // 字面量类型，值是 string
type T2 = TypeName<string[]> // 字面量类型，值是 object

// 分布式条件类型
// (A | B) extends U ? X : Y 得到的结果类型就是多个条件类型的联合类型: 
// (A extends U ? X : Y) | (B extends U ? X : Y)

type T3 = TypeName<string | string[]> // 推导为 string 和 object 的字面量联合类型

// 实现类型的过滤
type Diff<T, U> = T extends U ? never : T
type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'> // 推导为 b 和 c 的联合类型，过滤掉了 a
// 原理
// 将 Diff 进行拆解: Diff<'a', 'a' | 'e'> | Diff<'b', 'a' | 'e'> | Diff<'c', 'a' | 'e'>
// never | b | c => b | c

// Diff 的扩展，从类型中除去一些不需要的类型，比如 undefined 和 null
type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null> // 推导结果只有 string 和 number

// TS 中预置了 Diff，定义为了 Exclude<T, U>
// TS 中预置了 NotNull，定义为了 NonNullable<T>

// Extract<T, U> 的作用和 Exclude 相反
type T6 = Extract<'a' | 'b' | 'c', 'a' | 'e'>

// ReturnType<T> 获取一个函数返回值的类型
type T7 = ReturnType<() => string>
// 实现: type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
// 由于 函数的返回值类型是不确定的，所以采用 infer 关键字，代表延迟推断或者待推断，根据实际情况来确定

