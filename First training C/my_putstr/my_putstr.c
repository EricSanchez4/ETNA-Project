/*
 ETNA PROJECT, $YEAR
 $NAME_OF_THE_PROJECT
 File description:
         No file there, just an etna header example
*/

void my_putchar(char c);   
#include <stdio.h> 
#include <unistd.h>

char *my_revstr(char *str)
{
  int len = 0;
  while (str[len])
    {
      my_putchar(str[len]);
      len++;
    }
}
