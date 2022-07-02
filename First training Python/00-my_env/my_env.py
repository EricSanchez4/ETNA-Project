'''My_'''
__author__ = "sanche_e"

import os


def main():
    '''My_'''
    for i in sorted(os.environ):
        maVar = i[0:3]
        if maVar == "MY_":
            print(i[3:] + ": " + os.environ.get(i))


main()
