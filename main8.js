let a = prompt("write space");
for (let i = 0; i < a.length; i++) {
  if (a.charAt(i) == " ") {
    console.log(a.charAt(i));
  }
}



let c = prompt("write email");
if (c.indexOf("@") == 0) {
  console.log("Не правильно введені дані!@ на початку");
} else if (c.endsWith("@") == true) {
  console.log("Не правильно введені дані!@ в кінці");
} else if (c.indexOf("@") == -1) {
  console.log("немає @");
} else {
  console.log("Дані вірні");
}




let task3 = prompt("write html");
let start = 0;
let find = "";
while (true) {
  let position = task3.indexOf("html", start);
  if (position === -1) break;
  find += position + " ";
  start = position + 1;
  console.log(start.length);
}
console.log(find);




let str1 = prompt("write URL");
if (str1.startsWith("http://") == true) {
  console.log(str1.slice(7));
} else if (str1.startsWith("https://") == true) {
  console.log(str1.slice(8));
}
