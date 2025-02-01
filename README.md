# JavaScript Null Handling Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to null value handling within a simple addition function. The bug arises from the function immediately returning null if either input is null, rather than handling potential type conversion issues or providing more informative feedback.

## Bug Description

The `foo` function takes two arguments, `a` and `b`. It intends to add these two numbers together and return the result. However, the current implementation will return `null` if *either* `a` or `b` is `null`. This behavior is problematic in situations where the caller isn't prepared for a `null` return value, potentially leading to unexpected errors or crashes.

## Solution

The provided solution handles null values gracefully. If either `a` or `b` is null, it will use 0 instead of returning null, and in case of invalid input (Not a number) an error message is displayed.  This ensures the function always returns a numerical value, preventing potential runtime errors.