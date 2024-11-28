// mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from './mathUtils';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
