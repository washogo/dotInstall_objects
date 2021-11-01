'use strict';

{
  const otherScores = [10, 20];
  const scores = [80, 90, 40, 70, ...otherScores];
  // console.log(scores);

  function sum(a, b) {
    console.log(a + b);
  }

  sum(...otherScores);
  // sum(10, 20);
}

/*「...」はスプレッド構文、配列の中などで使うことで別の配列を展開することができる*/