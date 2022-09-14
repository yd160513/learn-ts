// const Point = {
//     x: 123,
//     y: '123123'
// }

// type P = keyof typeof Point

// const p: P = 'x'

// ----------------------------------------------------------------

type Point = {
    x: number,
    y: string
}
// 这里获取到的是 type Point 的 x 和 y，P 的值只能是 x | y，并不是获取 x 和 y 的类型
// 相当于将将 Point 的 key 转换为了一个联合类型
type P = keyof Point

const p: P = 'x'