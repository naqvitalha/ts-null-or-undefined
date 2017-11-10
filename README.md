# ts-null-or-undefined
Best way to check for null or undefined in typescript using a type guard.
Can strip out null or undefine or complex types like T | null etc.

To use: 
```js
import Type from "ts-null-or-undefined";

let a: number | null = 0;

console.log(a*4); //Error: a might be null

if(!Type.isNullOrUndefined(a)){
    console.log(a*4); //Works
}
```
