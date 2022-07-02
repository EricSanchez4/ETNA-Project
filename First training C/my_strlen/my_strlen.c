/*
 ETNA PROJECT, $2022
 $MY_PRINT_DIGITS
 $NAME_OF_THE_ISNEG
 File description:
         No file there, just an etna header example
*/
void my_putchar(char c);   

int my_strlen(const char *str)
{
    int len = 0;
    while (str[len])
    {
        len++;
    }
    return len;
} 