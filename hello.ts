console.log('hello world')

function greet(paraon: string, date: Date): number {
  console.log(`${paraon} ===== ${date.toDateString()}`)
  return 1
}
// greet('123', new Date())

// function fn(s: string) {
//   console.log(s.substr)
// }

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
// function doSomething(x: string | null) {
//   if (x === null) {
//     // do nothing
//   } else {
//     console.log("Hello, " + x.toUpperCase());
//   }
//   // console.log("Hello, " + x.toUpperCase());
// }


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

// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//     default:
//       const _exhaustiveCheck: never = shape;
//       return _exhaustiveCheck;
//   }
// }


// type DescribableFunction = {
//   description: string;
//   (someArg: number): boolean;
// };
// function doSomething(fn: DescribableFunction) {
//   console.log(fn.description + " returned " + fn(6));
// }
// function setName(name:number) {
//   return true
// }
// setName.description = '1'
// doSomething(setName)


// type SomeConstructor = {
//   new(s: string): SomeObject;
// };
// function fn(ctor: SomeConstructor) {
//   return new ctor("hello");
// }
// class SomeObject {
//   constructor(s: string) { }
// }
// fn(SomeObject)

function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0]
}
const s = firstElement(["a", "b", "c"]);
const n = firstElement([1, 2, 3]);
const u = firstElement([]);

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
// const parsed = map(["1", "2", "3"], (n) => parseInt(n));

// 可以处理任何类型
// 但是现在指向处理 number 或者 string 类型
const parsed = map(["1", "2", "3"], (n) => parseInt(n));


// function minimumLength<Type extends { length: number }>(
//   obj: Type,
//   minimum: number
// ): Type {
//   if (obj.length >= minimum) {
//     return obj;
//   } else {
//     return { length: minimum };
//   }
// }
// const user = {
//   length: 10,
//   name: 'zhangsan'
// }
// const res = minimumLength(user, 5)
// const res1 = minimumLength(user, 100)


function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number (good)
const a = firstElement1([1, 2, 3]);
// b: any (bad)
const b = firstElement2([1, 2, 3]);


function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}
filter1([12, 2, 3], (s) => false)

// 这里的 Func 作为泛型传入了，但是在函数内部却没有用到
function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}
filter2([1, 2, 3], (s) => true)

function f(x: number | undefined) {
  // ...
}

// 在定义回调函数的时候，建议将回调函数中的参数都是必传参数，不建议用可选参数
function myForEach(arr: any[], callback: (arg: any, index: number) => void) {
  // function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
    // callback(arr[i]);
  }
}
myForEach([1, 2, 3], (a) => console.log(a));
myForEach([1, 2, 3], (a, i) => console.log(a, i));
myForEach([1, 2, 3], (a, i) => {
  console.log(i.toFixed());
});

// 函数实现要兼容函数重载
// function fn(x: string): void;
// function fn() {
//   // ...
// }
// // Expected to be able to call with zero arguments
// fn();

function fn(x: string): string;
// Return type isn't right
function fn(x: number): boolean | string;
function fn(x: string | number) {
  return "oops";
}



// const user = {
//   id: 123,

//   admin: false,
//   becomeAdmin: function () {
//     this.admin = true;
//   },
// };

// type User = typeof user
// interface DB {
//   filterUsers(filter: (this: User) => boolean): User[];
// }
// const db = getDB();
// const admins = db.filterUsers(function (this: User) {
//   return this.admin;
// });


function safeParse(s: string): unknown {
  return JSON.parse(s);
}

// Need to be careful with 'obj'!
const obj12 = safeParse('someRandomString');

interface StringArray {
  [index: number]: string;
}
const string: StringArray = ['123']


interface NumberDictionary {
  [index: string]: number | string;
  length: number; // ok
  name: string;
}

interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

interface User1 {
  name: string
}
interface Man {
  // name: number
  age: string
}
// type User1 = {
//   name: string
// }
// type Man = {
//   name: number
// }
type aaa = User1 & Man


interface Box {
  contents: unknown
}
let x1: Box = {
  contents: '13123123'
}
if (typeof x1.contents === 'string') {
  console.log(x1.contents.toLowerCase())
}

// 可以将 Box 看作是一个实际类型的模板，其中 Type 是一个占位符，将被其他类型替换。
interface Box1<Type> {
  contents: Type;
}




interface Box2<Type> {
  contents: Type;
}
interface StringBox {
  contents: string;
}
 
let boxA: Box2<string> = { contents: "hello" };
boxA.contents;
        
 
let boxB: StringBox = { contents: "world" };
boxB.contents;


type OrNull<Type> = Type | null;
 
type OneOrMany<Type> = Type | Type[];
 
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
           
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;
interface User2 {
  name: string,
  age: number
}
const user2: OneOrManyOrNull<User2> = {
  name: '123',
  age: 18
}
const user3: OneOrManyOrNull<User2> = [{
  name: '123',
  age: 18
}]



const roArray: ReadonlyArray<string> = ["red", "green", "blue"];
// roArray.push()
// ReadonlyArray 的简写方式
function doStuff(values: readonly string[]) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);
 
  // ...but we can't mutate 'values'.
  values.push("hello!");
Property 'push' does not exist on type 'readonly string[]'.
}
const arr = ['1']
doStusff(arr)





function doSomething(pair: [string, number]) {
  const a = pair[0];
       
  const b = pair[1];
       
  // ...
}
// 和上边同理
interface StringNumberPair {
  // specialized properties
  length: 2;
  0: string;
  1: number;
 
  // Other 'Array<string | number>' members...
  slice(start?: number, end?: number): Array<string | number>;
}

type User = {
  name: string
}
type GetName = (this: User) => string
const getName: GetName = function () {
  return this.name
}