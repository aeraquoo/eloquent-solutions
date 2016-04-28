The mechanism is _inheritance_.  The prototypical inheritance of a local
environment from its containing environment in this line:

    var localEnv = Object.create(env);

is what allows Egg functions to close over their surrounding environment.
