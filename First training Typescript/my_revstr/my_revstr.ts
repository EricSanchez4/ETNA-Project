import{ print } from "./putchar";

export function my_revstr( str: string )
{
    for (let i = str.length-1; i >= 0; i--) {
        print(str.charAt(i))
    }
}

