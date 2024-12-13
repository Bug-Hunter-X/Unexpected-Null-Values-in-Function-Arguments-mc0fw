# Unexpected Null Values in Function Arguments

This repository demonstrates a common but subtle JavaScript bug related to handling unexpected null values in function arguments. The `foo` function correctly handles null inputs by returning null, but this behavior may hide underlying issues if the null values are unexpected or indicate a more severe problem.

**The Bug:** The function silently returns null when encountering null inputs, which might not be the desired behavior or might mask an issue elsewhere in the code.

**The Solution:** The improved function explicitly checks for null values, throws an error if they're unexpected, and includes helpful debugging information.

**How to run the code:**

1. Clone this repository.
2. Navigate to the repository's directory using the command line.
3. Open `bug.js` and `bugSolution.js` to see the original code and the solution, respectively.
4. Run the Javascript files using Node.js to see the output.