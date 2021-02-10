// 1.leap year or not

let year:number;
let checkyear = (year) : boolean =>
{
    return (year%4===0?true:false)
}
console.log(checkyear(2004));
console.log((checkyear(1998)));

// dynamic entry of value
let year1 : number;
year1=prompt("enter a value");
let checkyear1 = (year1) : boolean =>
{
    return (year1%4===0?true:false)
}
console.log(checkyear1(year1));

// 2.reversing string 

let str:string;
let reversedstr = (str) : string =>
{
    let newstring="";
    for(var i=str.length-1;i>=0;i--)
    {
        newstring+=str[i];
    }
    return newstring;

}
console.log(reversedstr("hello"));


// second approach

let word:string;
let reversedword = (word :string) : string =>
{
    return word.split("").reverse().join("");
}

console.log(reversedword("bhagya"));

// dynamic entry of string


let str1:string
str1=prompt("enter a string");
let reversedword1 = (str1) : string =>
{
    return str1.split("").reverse().join("");
}
console.log(reversedword1(str1));