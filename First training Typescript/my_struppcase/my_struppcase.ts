export function my_struppcase(str: string){
var mesPhrase = [''] ;
let a  : number = 1;
let comptPhrase :number;
str.split(' ').forEach(function(c: string){
//console.log(c);
mesPhrase.push(c);
//console.log(mesPhrase[a].charAt(0));
a++;
});
//console.log(mesPhrase);
//for(let test in mesPhrase)
mesPhrase[1].split(' ').forEach(function(c: string){
    a++;
    });
/////////////////////////////////////////////////////////////////////////
 // Ok il est 01h le 12/03, j'arrête merci d'avoir lu mon pauvre code.///
/////////////////////////////////////////////////////////////////////////
}
//console.log(my_struppcase("je vais faire des courses"));