import { print } from "./putchar";

export function my_print_comb2() {

    for ( let i : number = 0 ;  i<=9; i++) {
        for (let i1 : number = 0 ; i1<=9; i1++) {
            for (let i2 : number = 0 ; i2<=9; i2++) {
                for (let i3 : number = 0 ; i3<=9; i3++) {
                    let add0 = i3 + i2*10
                    let add1 = i1 + i*10
                    if ( add0 > add1) {

                        print(i)
                        print(i1)
                        print(" ")
                        print(i2)
                        print(i3)

                    
                    if ( i !== 9 || i1 !==  8 || i2 !== 9 || i3 !== 9) {
                        
                        print(",")
                        print(" ")
                    }
                }
            }
        }
    }
 }
    print("\n")
}