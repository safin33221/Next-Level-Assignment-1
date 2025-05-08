<h2 align="center">TypeScript</h2>

###

<p align="left">TypeScript is a strongly typed programming language that builds on JavaScript by adding static type definitions.</p>

###

<h3 align="left">Interface Vs Types</h3>

###

<p align="left">In TypeScript, both interface and type are used to define the shape or structure of data, but they serve slightly different purposes and offer different features. The interface is mainly used to describe the structure of an object, especially when working with object-oriented programming or classes. One of its most useful features is declaration merging, which allows you to define the same interface multiple times, and TypeScript will automatically combine them. This is particularly handy when you want to extend or modify types from third-party libraries without touching the original code.<br><br>On the other hand, type is more flexible and can be used for more complex type definitions. Unlike interfaces, type can represent not only object structures but also union types, intersection types, tuples, and even primitive values. However, type does not support declaration merging. Still, you can use the & (intersection) operator to combine multiple types, achieving similar results to what you might do with interface inheritance.</p>

###

<h3 align="left">"keyof" keyword</h3>

###

<p align="left">In TypeScript, the keyof keyword is used to get the keys (property names) of an object type as a new type. This helps us write safer code because it makes sure we only use property names that actually exist in an object.</p>

###
<p>Example:</p>

<p align="left">type Student = {<br>  name: string;<br>  roll: number;<br>  passed: boolean;<br>};<br><br>type StudentKeys = keyof Student;<br>// StudentKeys will be: "name" | "roll" | "passed"</p>

###
