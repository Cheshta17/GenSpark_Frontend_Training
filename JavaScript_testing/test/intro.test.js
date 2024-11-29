import { describe, it, expect } from "vitest";
import { max } from "../src/intro";

describe('max', () => {
  it('should return the first argument if it is greater', () => {
    expect(max(2, 1)).toBe(2);
  });

  it('should return the second argument if it is greater', () => {
    expect(max(1, 2)).toBe(2);
  });

  it('should return the first argument if arguments are equal', () => {
    expect(max(1, 1)).toBe(1);
  });
});

// Exercise
import { describe, it, expect } from "vitest"; 
import { fizzBuzz } from "../src/intro"; 

describe('fizzBuzz', () => {
  it('should return FizzBuzz if arg is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('should return Fizz if arg is only divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('should return Buzz if arg is only divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('should return arg as a string if it is not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toBe('1');
  });
});

// Example 
import { describe, it, expect } from "vitest";
import { sum } from "../src/intro";

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(3, 5)).toBe(8);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-3, -5)).toBe(-8);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(7, -2)).toBe(5);
  });

  it('should throw an error if arguments are not numbers', () => {
    expect(() => sum(3, '5')).toThrow('Both arguments must be numbers');
    expect(() => sum('a', null)).toThrow('Both arguments must be numbers');
  });

  it('should return 0 if both arguments are 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
