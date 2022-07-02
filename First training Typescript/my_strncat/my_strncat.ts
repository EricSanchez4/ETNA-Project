
export function my_strncat(dest: string, src: string, nb: number) {
let a : number = 0;


let string2 : string="";

dest.split('', nb).forEach(function(c: string) {
    a++;
      
});
src.split('', a).forEach(function(c: string) {
string2 = string2+c;

});

    return dest + string2;
   
}


