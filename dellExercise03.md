# Dell technical evaluation

## Exercise 3 - Why does the alert show Jack first and then undefined?

```
function identity() {
    var name = 'Jack';
    alert(name);
    return
    name
};

var who = identity();
alert(who)
```

Answer: Because the function is returning undefined. The return statement expects a value/variable in the same line,
and if none is provided it will return undefined. If you move the last name variable to the same line as the
return statement, it will alert "Jack" 2 times.


