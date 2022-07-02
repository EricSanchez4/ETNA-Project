#include <stdio.h>

int my_print_alpha(void)
    {
    char  alphabet;
    alphabet = 97;

    while (alphabet < 123)
    {
        printf("%c", alphabet);
        alphabet = alphabet + 1;
    }
    printf("\n");       
    return 0;
    }