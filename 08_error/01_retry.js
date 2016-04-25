/* code given to me, with one edit */
function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
/* this threshold, 0.01, has been edited from 0.5.
 * this means it is virtually guaranteed to fail on the first try.
 * this will make testing our reliable function easier: if it works at all,
 * it probably handled a failure in primitiveMultiply
 */
  if (Math.random() < 0.01)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

/* end code given to me, start my own code */

function reliableMultiply(a, b) {
  while (true) {
    try {
      return primitiveMultiply(a,b);
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        /* do nothing, just loop around and try again */
        null;
      } else {
        throw error;
      }
    }
  }
}

module.exports = {
  reliableMultiply: reliableMultiply
};
