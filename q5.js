// Q5) Given two strings 'str1' and 'str2', check if these two strings are isomorphic to each other.

function isomorphic(str1, str2) {
  if (patter(str1) == patter(str2)) {
    console.log(1);
  } else console.log(0);
}

function patter(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str.indexOf(str[i]);
  }
  return newStr;
}

isomorphic("aab", "xxy");
isomorphic("aab", "xyz");
