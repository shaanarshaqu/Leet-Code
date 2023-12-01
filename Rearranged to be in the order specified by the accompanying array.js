
// Given a string and an array of index numbers, 
// return the characters of the string rearranged to be in the order specified by the accompanying array.
//
//  Ex:
//    scramble('abcd', [0,3,1,2]) -> 'acdb'




function scramble(str, arr) {
  let index = 0;
  newarr = [];

  for (let x of arr) {
    newarr[x] = str[index];
    index++;
  }
  return newarr.join('');
}

console.log(scramble("abcd", [0, 3, 1, 2]))