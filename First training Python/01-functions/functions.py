"""Let the battle begin !"""
__author__ = "sanche_e"
from audioop import add
from contextlib import nullcontext
import sys
from typing import List
from xmlrpc.client import boolean
from typing import Callable


def printer(text: str, err: bool = False) -> int:
    """ROUND 1 !"""
    if err:
         sys.stderr.write(text)
    else:
       sys.stdout.write(text)

    return len(text)

def my_map(function, data):
    """ROUND 2 !"""
    my_list = []
    for  i in data:
        my_list.append(function(i))

    return my_list

def my_filter(function: Callable, data: "list[any]") -> "list[any]":
    """Print function"""
    list = []
    for i in data:
        if function(i):
            list.append(i)
    return list


def my_reduce(function: Callable, data: "list[any]") -> "any":
    """Print function"""
    result = data[0]
    for i in data[1:]:
        result = function(result, i)
    return result