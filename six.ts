// type MessageOf<T extends { message: unknown }> = T["message"];

// interface Email {
//   message: string;
// }

// type EmailMessageContents = MessageOf<Email>;


// never: 占位，什么类型也不是
// type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

// interface Email {
//   message: string;
// }

// interface Dog {
//   bark(): void;
// }

// type EmailMessageContents = MessageOf<Email>;

// type DogMessageContents = MessageOf<Dog>;




// type Flatten<T> = T extends any[] ? T[number] : T;

// // Extracts out the element type.
// type Str = Flatten<string[]>;
// // Leaves the type alone.
// type Num = Flatten<number>;


// type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

// // type Str = Flatten<string>

// type User = {
//   name: string,
//   age: number
// }

// type Str = Flatten<User[]>


// 
// type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
//   ? Return
//   : never;

// type Num = GetReturnType<() => number>;

// type Str = GetReturnType<(x: string) => string>;

// type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;


// 除了 never，其他类型都是继承自 any
// type ToArray<Type> = Type extends any ? Type[] : never;
type ToArray<Type> = Type extends any ? Type[] : never;
 
// 只能是 string 数组或者 number 数组
type StrArrOrNumArr = ToArray<string | number>; // 得到 string 的数组或者 number 的数组
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
 
// 'StrArrOrNumArr' is no longer a union.
// string 和 number 数组都可以
// type StrArrOrNumArr = ToArrayNonDist<string | number>;

// const arr11: StrArrOrNumArr = [1, '']


// 映射类型 --------------------------------------------------------

// type OnlyBoolsAndHorses = {
//   [key: string]: boolean | Horse;
// };
 
// const conforms: OnlyBoolsAndHorses = {
//   del: true,
//   rodney: false,
// };


type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};
 
type FeatureOptions = OptionsFlags<FeatureFlags>;


// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};
 
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};
 
type UnlockedAccount = CreateMutable<LockedAccount>;



// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
 
type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};
 
type User = Concrete<MaybeUser>;


// // ------------------
// type Getters<Type> = {
//   [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
// };

// interface Person {
//   name: string;
//   age: number;
//   location: string;
// }

// type LazyPerson = Getters<Person>;



type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};
 
type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};
 
type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;


const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});
 
person.on("firstNameChanged", () => {});
 
// Prevent easy human error (using the key instead of the event name)
person.on("firstName", () => {});
// Argument of type '"firstName"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.
 
// It's typo-resistant
person.on("frstNameChanged", () => {});



// type Greeting = "Hello, world"
// // type ShoutyGreeting = Uppercase<Greeting>
           
// type ShoutyGreeting = "HELLO, WORLD"
 
// type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
// type MainID = ASCIICacheKey<"my_app">


type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>;