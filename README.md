# devlim ! What is this package ?

This is a package which provides the series expansion of the usual functions expansion around zero, up to the 3th order.
It mainly covers the following functions : e, sh, ch, sin, cos, tan, th, arctan, argth, arcsin, argsh

# Package utility :

- Calculation of derivatives    : Calculate approximations of derivatives of complex mathematical functions
- Optimization of functions     : Find critical points of a function, such as maxima and minima
- Simulation of dynamic systems : Model the behavior of a dynamic system at a given time
- Calculation of probabilities  : Calculate probabilities of complex probability distributions
# Installation :

npm i devlim

# Example of use :

const devlim = require('devlim');

let devLimValue =  devlim('sin', 'a'); // Second parameter is optional with 'x' default value
console.log(devLimValue);

Output :
a - a^3/6
