var>we are able to redeclare and reassign(suppose we take var a=angular and someone will white
    var a=react in this place what is the problem is the value get overwrite,same variable can
    overwrite someone else so that is why we don't prefer this much)
let>we can't redeclare but can reassing

const>we can't redeclare nor reaasign.

C:\Users\Mr. Perfect>node
Welcome to Node.js v14.15.3.
Type ".help" for more information.
> var a=12
undefined
> a
12
> 23
23
> a=34
34
> var a=45
undefined
>
> a
45
> var a =56
undefined
> a
56
> let a= 34
Uncaught SyntaxError: Identifier 'a' has already been declared
> let b=34
undefined
> b
34
> lat b = 40
lat b = 40
    ^

Uncaught SyntaxError: Unexpected identifier
> let b=45
Uncaught SyntaxError: Identifier 'b' has already been declared
> const c=11
undefined
> c
11
> c=11
Uncaught TypeError: Assignment to constant variable.
> const c=45
Uncaught SyntaxError: Identifier 'c' has already been declared
> c=23
Uncaught TypeError: Assignment to constant variable.
>