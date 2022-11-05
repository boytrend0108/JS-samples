// export default
import a from './main.js';
const b = 20;
const c = a + b;
console.log(c);
// export 
import A from './main.js';
console.log(A + 22);

import { Purson } from './main.js';
console.log(new Purson(`Yan`, 35));

import { sayHi } from './main.js';
sayHi();

import * as param from './main.js'
console.log(a);