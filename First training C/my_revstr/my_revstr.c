/*
 ETNA PROJECT, $YEAR
 $NAME_OF_THE_PROJECT
 File description:
         No file there, just an etna header example
*/

void my_putchar(char c);   
#include <stdio.h> 
#include <unistd.h>

int my_strlen(const char *str)
{
    int len = 0;
    while (str[len])
    {
        len++;
    }
    return len;
} 

char *my_revstr(char *str)
{
  int len = my_strlen(str);
  char *var;
  while (len >= 0 )
  {
    var = var + str[len];
    len--;
  }
  return var;
}