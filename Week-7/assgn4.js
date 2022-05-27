function paranChecker(s) {
  let stck = [];
  for (let i = 0; i < s.length; i++) {
    let char = stck[stck.length - 1];
    // console.log(char);
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stck.push(s[i]);
    } else if (
      (char == "(" && s[i] == ")") ||
      (char == "{" && s[i] == "}") ||
      (char == "[" && s[i] == "]")
    ) {
      stck.pop();
    }
  }
  if (stck.length == 0) {
    return true;
  } else {
    return false;
  }
}

var str = "[()]{}{()()}";
let s = [];
s = str.split("");
// console.log(s);
console.log(paranChecker(s));
