# Given a string and an array of index numbers,return the characters of the string rearranged to be in the order specified by the accompanying array.
 *Ex:
  scramble('abcd', [0,3,1,2]) -> 'acdb'*

----------------------------------------------------------------------------------
```javascript
My Solutions:
function scramble(str, arr) {
  newarr = [];
  
  let index = 0;
  for (let x of arr) {
    newarr[x] = str[index];
    index++;
  }
  return newarr.join('');
}

console.log(scramble("abcd", [0, 3, 1, 2]))
```
-----------------------------------------------------------------------------
