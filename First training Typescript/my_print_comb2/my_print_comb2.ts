import{ print } from "./putchar";
export function my_print_comb2() {
let a = 0;let b = 0;let c = false;

    for (let i = 0; c != true; i++ ){   
        a++;
        console.log("a+");
        if ( a == 99){ 
            b++;
            console.log("b+");
            if (b == 99){
                c = true; // finish boucle
                console.log("Finish");
            }
        }
        
        print(b + " " + a);
    }
}
my_print_comb2()