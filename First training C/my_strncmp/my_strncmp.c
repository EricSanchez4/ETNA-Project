/*
 ETNA PROJECT, $YEAR
 $NAME_OF_THE_PROJECT
 File description:
         No file there, just an etna header example
*/
#include <stdio.h> 
#include <stdlib.h>
#include <unistd.h>

int my_strncmp(const char *s1, const char *s2, int n)
{
    int i = 0;
    int result;

    while (i < n && (s1[i] || s2[i]))
    {
        if (s1[i] != s2[i])  
        {
            result = s1[i] - s2[i];
            return result;
        }
        i++;
    }
    return 0;
}