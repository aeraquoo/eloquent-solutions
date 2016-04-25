var number = /^(\-|\+)?((\d+(\.\d*)?)|((\d*\.)?\d+))([eE](\-|\+)?\d+)?$/;

/* Explanation:
  // start of string
    ^
  // followed, optionally, by a plus or minus
    (\-|\+)?
  // followed by some digits, optionally followed by a decimal point and any
  // number (zero included) of other digits
    ((\d+(\.\d*)?)
  // OR
    |
  // some digits, optionally PRECEDED any number (zero included) of other
  // digits and a decimal point
    ((\d*\.)?\d+))
  // followed, optionally, by an e and some digits, optionally with a plus or
  // minus inbetween
    ([eE](\-|\+)?\d+)?
  // end of string
    $
*/

module.exports = number;
