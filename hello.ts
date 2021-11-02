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

// 类型断言
// 1. 
const mycanvas = document.getElementById('test') as HTMLCanvasElement // 推荐使用
// 2. 尖括号语法
const mycanvas2 = <HTMLCanvasElement>document.getElementById('test')

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");


type test = true | false

const obj1 = { counter: 0 };
if (true) {
  obj1.counter = 1;
}


// 使用 const 声明得到的是一个字面量
// 使用 let/var/在对象中 声明得到的是一个 string
const Method = 'GET'

const req = { url: "https://example.com", method: "GET" } as const
// handleRequest(req.url, req.method as "GET");
handleRequest(req.url, req.method);

function handleRequest(url: string, methos: 'GET' | 'POST') {

}

// 类型收缩
// 1. typeof
// 2. if (true | false)
// 3. Equality narrowing
// 4. in
// 5. instanceof
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
  // console.log("Hello, " + x.toUpperCase());
}


function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}


function padLeft(padding: number | string, input: string) {
  if (typeof padding === 'number') {
    return new Array(padding + 1).join(" ") + input;
  }
  return padding + input
}

// function printAll(strs: string | string[] | null) {
//   //  if (typeof strs === "object") {
//   // if (Array.isArray(strs)) {
//   if (strs && typeof strs === "object") {
//     for (const s of strs) {
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else {
//     // do nothing
//   }
// }

function printAll(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {

        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);

    }
  }
}

function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}


function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();

    y.toLowerCase();

  } else {
    console.log(x);

    console.log(y);

  }
}

// type Fish = { swim: () => void };
// type Bird = { fly: () => void };

// function move(animal: Fish | Bird) {
//   if ("swim" in animal) {
//     return animal.swim();
//   }

//   return animal.fly();
// }

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal;

  } else {
    animal;

  }
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());

  } else {
    console.log(x.toUpperCase());

  }
}

let x = Math.random() < 0.5 ? 10 : "hello world!";
x = 1;
console.log(x);
x = "goodbye!";
console.log(x);


// interface Shape {
//   kind: "circle" | "square";
//   radius?: number;
//   sideLength?: number;
// }
// function getArea(shape: Shape) {
//   return Math.PI * shape.radius ** 2;
// }

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}
interface Triangle {
  kind: "triangle";
  sideLength: number;
}
type Shape = Circle | Square | Triangle;
// function getArea(shape: Shape) {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius ** 2;
//   }
// }

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}