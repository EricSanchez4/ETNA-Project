#include <stdio.h>

int my_print_revalpha(void)
    {
    char  alphabet;
    alphabet = 122;

    while (alphabet >= 97)
    {
        printf("%c", alphabet);
        alphabet = alphabet - 1;
    }      
    return 0;
    }
    