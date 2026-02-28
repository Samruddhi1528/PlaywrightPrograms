let a = 5;
let b = a++ + ++a
let c = a++ + ++a + ++a + ++a + a++;

console.log("a: " + a)
console.log("b: " + b)
console.log("c: " + c)

/*
a= 7
b= 12
c= 

Exp 1: a++ + ++a
Exp a: 5
Exp b: 7
Result b = 12
==========

a= 12
b= 12
c= 

Exp 2:  a++ + ++a + ++a + ++a + a++
Exp a = 7
Exp b = 9
Exp c = 10
Exp d = 11
Exp e = 11

Result = 48

Final Output:
a: 12
b: 12
c: 48
*/