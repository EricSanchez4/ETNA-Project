/*
 ETNA PROJECT, $YEAR
 $NAME_OF_THE_PROJECT
 File description:
         No file there, just an etna header example
*/

char *my_strcpy(char *dest, const char *src)
{
  int   i;

  i = 0;
  while (src[i] != '\0')
    {
      dest[i] = src[i];
      i++;
    }
  dest[i] = '\0';
  return (dest);
}