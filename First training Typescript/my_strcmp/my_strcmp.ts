export function my_strcmp(first: string, second: string) {
    
  let i : number = 0;

 while (first.charAt(i) && second.charAt(i))   {
     if ( first.charCodeAt(i) !== second.charCodeAt(i) ) {
         
         return (first.charCodeAt(i) - second.charCodeAt(i))
     }
     i++;

 } 
 if (first.charAt(i) == second.charAt(i)) {
     
     return 0
 }    
 else if(first.charAt(i)){

     return first.charCodeAt(i) 

 } else if (second.charAt(i)) {

     return -second.charCodeAt(i) 

 }
 return 0
}
