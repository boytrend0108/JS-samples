const a = 10;
export default a
// if not default - use {}
const A = 40;
export { A };
// or this way
//export { A2, a2 }

// export class
export class Purson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// export function
export function sayHi() {
    console.log(`Hi!`);
};

// or this way
// export { Purson2, sayHi2 }
