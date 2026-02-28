/*
Q: Why does `if([])` evaluate to true even though the array is empty?

A: An empty array `[]` is an object, and ALL objects are truthy in JavaScript.



Q: Should I use `if(response)` or `if(response !== null)` in test assertions? 

A: Use `if(response != null)` which catches both null and undefined. Plain `if(response)` also fails on `0`, `""`, and `false` which might be legitimate API values.



Q: What is the difference between `if(x == 5)` and `if(x === 5)` in testing?

Always use `===` (strict equality) in tests. `==` does type coercion: `"5" == 5` is true but `"5" === 5` is false. In QA, strict equality catches type bugs.



Q: Can I have an else if without a final else? 

A: Yes! The final `else` is optional. But in QA automation, always include a final else with a failure message so unexpected conditions are caught instead of silently passing.



Q: Is there a performance difference between many if/else if vs switch?

A: For many conditions comparing the same value, switch is slightly more readable and may be optimized better. But for complex conditions with different comparisons, if/else if is the only option.



*/