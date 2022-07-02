/*
 ETNA PROJECT, $YEAR
 $NAME_OF_THE_PROJECT
 File description:
         No file there, just an etna header example
*/

void my_putchar(char c);

void my_print_digits(void)
{
    int  chiffre;

    chiffre = 48;
    while (chiffre < 58)
        {
        my_putchar(chiffre);
        chiffre++;
        }
}
