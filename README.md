# Poker-library-js
A library for poker in javascript.
This library is accessible via [npm](https://npmjs.com/package/@educorzo/poker-library) too.

## Build
Install dependencies.
```sh
$ npm install
```

Run test
```sh
$ npm test
```

# Utilities
 - Compare two hands
 - Get random hands
    - Get Royal Flush
    - Get Straight flush
    - Get Four of a kind
    - Get Full House
    - Get Flush
    - Get Straight
    - Get Three of a kind
    - Get Two pairs
    - Get Pair
    - Get High card

# How to use

Compare two hands by using:
```
    var player1 = '2s 3d 4h 5s 6d',
        player2 = 'Ts Js Qs Kd As',
        result = poker.compareTwoHands(player1, player2);
```
Both parameters are strings with cards separeted by spaces.
It returns a number greater than 0 if first parameter has a better hand than second parameter. If there is a tie, it returns 0. A number lower than 0 is returned when second parameter has the best hand.
Less than 5 cards are not allowed.

Get random hands using the RandomHandGenerator:
```
    var randomHandGenerator = poker.createRandomHandGenerator(Math.random);

    randomHandGenerator.getRoyalFlush();
```
RandomHandGenerator must be created with a random numbers generator (between 0 and 1), such as Math.random. By using its methods, it will return a string with the hand representation.

# Representations

A suit is represented like this:
- 's' for spades
- 'd' for diamonds
- 'h' for hearts
- 'c' for clubs

Ranks are represented with : 2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A.

# Notes
This library has been done by appling Test Driven Development.
There are more than 100 tests! You can read them to understand better this library.
Linting is still not configured, it will be added in future iterations.