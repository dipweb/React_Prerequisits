# React_Prerequisits

For better understanding of React Library, We need to understand below topics.

# Inheritence and Prototype Change

- JavaScript only has one construct: object. Each object has a private property which holds a link to another object called its **prototype**. That prototype object has a prototype of its own and so on untill an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this **prototype chain** .

- In javaScript the class model is also implemented over prototypal inheritence. Although classes are now widely adopted and have become new paradigm in JavaScript, classed do not bring a new inheritence pattern. While classes abstract most of the prototypical mechanism away.

## What happens when we trying to access a property of Object?

JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object.
When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

```
const o = {
  a: 1,
  b: 2,
  __proto__: {
    b: 3,
    c: 4,
  },
};

console.log(o.a);
console.log(o.b);
console.log(o.c);
console.log(o.d);

```

### Let's understand prototype chain and Inheritence Here

- console.log(o.a); //1, Is 'o' has a property 'a'? Yes, and its value is 1.

- console.log(o.b); // 2, Is 'o' has a property 'b'? Yes, and its value is 2. The prototype also has a 'b' property, but its not visited.This is called property shadowing

- console.log(o.c); // 4, Is 'o' has a property 'c' ? No, check its prototype. Is ' o.[[Prototype]] has a property 'c' ? Yes, Its value is 4

- console.log(o.d); //undefined, Is 'o' has a property 'd'? No, check its prototype. Is 'o.[[Prototype]]' has property 'd' ? No, Check its prototype. o.[[Prototype]].[[Prototype]] is Object.prototype and there is no 'd' property by default, check its prototype.
  o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching, no property found, return undefined.
