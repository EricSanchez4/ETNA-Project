import{ print } from "./putchar";

export function my_putstr( str: string )
{
    for (var i = 0; i < str.length; i++) {
        print(str.charAt(i));
    }
}