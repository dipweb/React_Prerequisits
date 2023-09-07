const o = {
  a: 1,
  b: 2,
  __proto__: {
    b: 3,
    c: 4,
  },
};

// Let's understand prototype chain and Inheritence Here
console.log(o.a); //1
// Is  'o' has a property 'a'? Yes, and its value is 1.

console.log(o.b); // 2

// Is 'o' has a property 'b'? Yes, and its value is 2.
// The prototype also has a 'b' property, but its not visited
// This is called property shadowing

console.log(o.c); // 4
// Is 'o' has a property 'c' ? No, check its prototype.
// Is ' o.[[Prototype]] has a property 'c' ? Yes, Its value is 4

console.log(o.d); //undefined
// Is 'o' has a property 'd'? No, check its prototype.
// Is 'o.[[Prototype]]' has property 'd' ? No, Check its prototype.
// o.[[Prototype]].[[Prototype]] is Object.prototype and
// there is no 'd' property by default, check its prototype.

// o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined.
