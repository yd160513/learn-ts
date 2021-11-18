// 函数 ---------

// type
// function identity<Type>(arg: Type): Type {
//   return arg;
// }

// console.log(identity<number>(123))

// function loggingIdentity<Type>(arg: Type[]): Type {
//   console.log(arg.length);
//   return arg;
// }

// function identity<Type>(arg: Type): Type {
//   return arg;
// }
 
// let myIdentity: <Type>(arg: Type) => Type = identity;

// function identity<Type>(arg: Type): Type {
//   return arg;
// }
 
// let myIdentity: { <Type>(arg: Type): Type } = identity;

// interface GenericIdentityFn {
//   <Type>(arg: Type): Type;
// }
 
// function identity<Type>(arg: Type): Type {
//   return arg;
// }
 
// let myIdentity: GenericIdentityFn = identity;

// -----

interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}
 
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: GenericIdentityFn<number> = identity;

// 类 ---------
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// 类型约束
// function loggingIdentity<Type>(arg: Type): Type {
//   console.log(arg.length); // 这里 length 有可能没有
//   return arg;
// }
// interface LengthWise {
//   length: number
// }

// function loggingIdentity<Type extends LengthWise>(arg: Type): Type {
//   console.log(arg.length); // 这里 length 有可能没有
//   return arg;
// }

// 约束使用类型参数
// function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
//   return obj[key];
// }
// let x = { a: 1, b: 2, c: 3, d: 4 };

// type xType = typeof x
// type aa = keyof xType


type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
    
type A = number
 
type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

type Person = { age: number; name: string; alive: boolean };
type r = keyof Person
const s: r = ''

// ----------------------
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
 
type Person = typeof MyArray[number];
       
type Person = {
    name: string;
    age: number;
}
type Age = typeof MyArray[number]["age"];
     
type Age = number
// Or
type Age2 = Person["age"];


// --------------
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}
 
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;


function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw "unimplemented";
}
 
let a = createLabel("typescript");
   
let a: NameLabel
 
let b = createLabel(2.8);
   
let b: IdLabel
 
let c = createLabel(Math.random() ? "hello" : 42);

