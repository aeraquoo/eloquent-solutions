# Eloquent Javascript Solutions

These are solutions by myself, Jaye Heffernan to the exercises provided in the
end of the chapters of Eloquent Javascript, written by Marijn Haverbeke, as
availible at eloquentjavascript.net.  My aim is to develop proficiency in
Javascript and the Javascript workflow, with emphasis on clear coding style and
commenting.

The directory structure is as follows for the first two sets of exercises, and
will likely expand in a similar fashion.

    .
    ├── 02_program_structure
    │   ├── 01_looping_a_triangle.js
    │   ├── 02_fizzbuzz.js
    │   └── 03_chess_board.js
    ├── 03_functions
    │   ├── 01_minimum.js
    │   ├── 02_recursion.js
    │   ├── 03_bean_counting.js
    │   └── test
    │       ├── 01_minimum.test.js
    │       ├── 02_recursion.test.js
    │       └── 03_bean_counting.test.js
    └── README.md

Test running requires the npm modules mocha and chai.  To install:

    npm install -g mocha chai

from the command line.  To run:

    mocha

from inside a chapter directory (e.g. `03_functions`).  For this to be
meaningful, the directory should contain a non-empty directory, `test`,
containing tests to run.  Alternatively, to run all tests, from the top-level
directory where this README is kept:

    mocha */test
