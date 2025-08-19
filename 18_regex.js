const regex =/pattern/;
console.log(regex);

var regex =/Hello/;
var text ="Hello,World!";
var result =regex.test(text);
console.log(result);


var regex =/World/;
var text ="Hello,World!";
var result =text.match(regex);
console.log(result);


var regex =/hello/i;
var text ="Hello ,world!";
var result =regex.test(text);
console.log(result);

let regex =/[aeiou]/;
let text ="Hello ,oworld";
let result = text.match(regex);
console.log(result);
