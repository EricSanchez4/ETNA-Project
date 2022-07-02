'''My_'''
__author__ = "sanche_e"
import os
import subprocess
import sys


def main():
    '''My_'''
    x = []
    ma_Var = ""
    if os.environ.get('MY_CMD'):
        x = os.environ.get('MY_CMD').split(',')
        if len(sys.argv) == 2:
            if sys.argv[1] == "--upper":
                for i in x:
                    proc = subprocess.Popen(i, stdout=subprocess.PIPE)
                    output = proc.stdout.read()
                    print(output.upper(), end='')
        else:
            for i in x:
                subprocess.run(i)

    else:
        return None


main()
