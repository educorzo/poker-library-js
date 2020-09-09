# Poker-library-js
A library for poker in javascript.

## Build
If you do not want to build it check: https://npmjs.com/package/@educorzo/poker-library

Install dependencies and devDependencies.
```sh
$ npm install
```

Run test
```sh
$ npm install
```

EsLint is still not configured, it will be added in future iterations.
# How to use

Compare two hands by using:
```
    var player1 = '2s 3d 4h 5s 6d',
        player2 = 'Ts Js Qs Kd As'
    poker.compareTwoHands(player1, player2);
```
Both parameters are strings with cards separeted by spaces.
A suit is represented like this:
- 's' for spades
- 'd' for diamonds
- 'h' for hearts
- 'c' for clubs

Ranks are represented with : 2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A.

Less than 5 cards are not allowed.

There are more than 80 tests! You can read them to understand better this library.
