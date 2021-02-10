// 1.leap year or not
var year;
var checkyear = function (year) {
    return (year % 4 === 0 ? true : false);
};
console.log(checkyear(2004));
console.log((checkyear(1998)));
var year1;
year1 = prompt("enter a value");
var checkyear1 = function (year1) {
    return (year1 % 4 === 0 ? true : false);
};
// 2.reversing string 
var str;
var reversedstr = function (str) {
    var newstring = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newstring += str[i];
    }
    return newstring;
};
console.log(reversedstr("hello"));
// second approach
var word;
var reversedword = function (word) {
    return word.split("").reverse().join("");
};
console.log(reversedword("bhagya"));
var str1;
str1 = prompt("enter a string");
var reversedword1 = function (str1) {
    return str1.split("").reverse().join("");
};
console.log(reversedword1(str1));
