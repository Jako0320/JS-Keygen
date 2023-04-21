# JS-Keygen
Randomized password generator Challenge Week 3

Didn't do nearly enough commits, kept working on and off on it with my desktop on. I have to be better at committing regularly.

I copied strings of values for each array (didn't realize at first some had spaces within, the price of laziness!) as well as the function to create the all cap array from stackoverflow's forum (tried it my way, got a bug).

It took me a while to debug one nasty mistake, I hadn't declared password as an array, and the push functions kept bugging.
I also had to look up how to mutate my resulting array into a string.

Damn password array was concatenating the previous values, it took me a while to realize it was simply because I had declared it outside the function. Quick fix, long debug...

I also chose to remove certain characters to avoid confusions (0 and o, letter l and number 1), even though slightly different, I know I always hate it when any come up in a password.

I realized at the 11th hour that this gives a random code with random characters out of what the user choices CAN be there, but doesn't force at least one of each selection in the final password. I hope that is ok, the wording of the acceptance criteria doesn't seem to force it, but it could be my interpretation (and the fact I'm not sure how I would go about to remediate that).

