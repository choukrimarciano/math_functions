function math_functions() {
  // Calculate the sum of two numbers
  function sum(a, b) {
    return a + b;
  }

  // Calculate the difference of two numbers
  function diff(a, b) {
    return a - b;
  }

  // Calculate the product of two numbers
  function prod(a, b) {
    return a * b;
  }

  // Calculate the quotient of two numbers
  function quot(a, b) {
    return a / b;
  }

  // Calculate the modulus of two numbers
  function mod(a, b) {
    return a % b;
  }

  // Calculate the square root of a number
  function sqrt(a) {
    return Math.sqrt(a);
  }

  // Calculate the cube root of a number
  function cbrt(a) {
    return Math.cbrt(a);
  }

  // Calculate the exponential of a number
  function exp(a) {
    return Math.exp(a);
  }

  // Calculate the natural logarithm of a number
  function ln(a) {
    return Math.log(a);
  }

  // Calculate the binary logarithm of a number
  function log2(a) {
    return Math.log2(a);
  }

  // Calculate the trigonometric sine of a number
  function sin(a) {
    return Math.sin(a);
  }

  // Calculate the trigonometric cosine of a number
  function cos(a) {
    return Math.cos(a);
  }

  // Calculate the trigonometric tangent of a number
  function tan(a) {
    return Math.tan(a);
  }

  // Calculate the trigonometric cotangent of a number
  function cot(a) {
    return 1 / Math.tan(a);
  }

  // Calculate the trigonometric secant of a number
  function sec(a) {
     return 1 / Math.cos(a);
  }

  // Calculate the trigonometric cosecant of a number
  function csc(a) {
    return 1 / Math.sin(a);
  }

  // Calculate the hyperbolic sine of a number
  function sinh(a) {
    return Math.sinh(a);
  }

  // Calculate the hyperbolic cosine of a number
  function cosh(a) {
    return Math.cosh(a);
  }

  // Calculate the hyperbolic tangent of a number
  function tanh(a) {
    return Math.tanh(a);
  }

  // Calculate the hyperbolic cotangent of a number
  function coth(a) {
    return 1 / Math.tanh(a);
  }

  // Calculate the hyperbolic secant of a number
  function sech(a) {
     return 1 / Math.cosh(a);
  }

  // Calculate the hyperbolic cosecant of a number
  function csch(a) {
    return 1 / Math.sinh(a);
  }

  // Calculate the absolute value of a number
  function abs(a) {
    return Math.abs(a);
  }

  // Calculate the floor of a number
  function floor(a) {
    return Math.floor(a);
  }

  // Calculate the ceiling of a number
  function ceil(a) {
    return Math.ceil(a);
  }

  // Calculate the rounding of a number to the nearest integer
  function round(a) {
    return Math.round(a);
  }

  // Calculate the truncating of a number
  function trunc(a) {
    return Math.trunc(a);
  }

  return {
    sum, diff, prod, quot, mod, sqrt, cbrt, exp, ln, log2, sin, cos, tan, cot, sec, csc, sinh, cosh, tanh, coth, sech, csch, abs, floor, ceil, round, trunc
  }
}
