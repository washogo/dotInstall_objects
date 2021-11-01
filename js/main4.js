'use strict';

{
  const scores = [80, 90, 40, 70];
  scores.push(60, 50);
  scores.shift();
  // 90, 40, 70, 60, 50

  for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);
  }
}
/*unshift,push,shift,popは配列から要素を削除したり追加したりする*/