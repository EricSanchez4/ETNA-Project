/*
 ETNA PROJECT, $YEAR
 $NAME_OF_THE_PROJECT
 File description:
         No file there, just an etna header example
*/
#include <stdio.h> 
#include <stdlib.h>
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

char *my_strcat(char *dest, const char *src)
{
  int   len;
  int   i;

  len = my_strlen(dest);
  i = 0;
  while (src[i])
    {
      dest[len + i] = src[i];
      i = i + 1;
    }
  dest[len + i] = '\0';
  return (dest);
}