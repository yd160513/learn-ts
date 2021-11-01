console.log('hello world')

function greet(paraon: string, date: Date): number {
  console.log(`${paraon} ===== ${date.toDateString()}`)
  return 1
}
// greet('123', new Date())

function fn(s: string) {
  console.log(s.substr)
}

// // let msg = 'message'

const arr: number[] = [1, 2, 3]
const arr1: Array<number> = [1, 2, 3]


const names = ["Alice", "Bob", "Eve"];
// Contextual typing for function
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

const obj: Obj = {
  a: 1,
  b: '123'
}

type Obj = {
  a: number,
  b: string
}

function printId(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id)
  }
}

type Test = {
  name: string,
  age: number
}

const test: Test = {
  name: '张三',
  age: 18
}

type ID = string | number
const id: ID = 123

interface Window {
  test: number
}
window.test = 123
