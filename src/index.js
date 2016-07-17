// babel index.js -o a.js
// bable index.js --out-file a.js

// babel src --out-dir build
// babel src -d build

import "babel-polyfill";

console.log('===')


const sum=(a,b)=>a+b;
let x = sum(3,2);
console.log(x);

Object.assign();
