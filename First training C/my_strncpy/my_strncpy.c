/*
 ETNA PROJECT, $YEAR
 $NAME_OF_THE_PROJECT
 File description:
         No file there, just an etna header example
*/
#include <stdio.h> 
#include <stdlib.h>
#include <unistd.h>

char *my_strncpy(char *dest, const char *src, int n)
{
  int i;

  i = 0;
  while (i < n && src[i] != '\0')
    {
      dest[i] = src[i];
      i++;
    }
    while (i < n)
    {
      dest[i] = '\0';
      i++;
    }    
  return (dest);
}