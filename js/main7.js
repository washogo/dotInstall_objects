'use strict';

{
  const scores = [80, 90, 40, 70];

  // const [a, b, c, d] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);
  //分割代入

  // const [a, b, ...others] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(others);
  //レスト構文

  let x = 30;
  let y = 70;
  [x, y] = [y, x];
  console.log(x);
  console.log(y);
    /*分割代入とレスト構文*/
  /*「...」はレスト構文と呼ぶ、分割代入と一緒に使うと割り当てた以外の要素を指定した名前の配列に格納する*/
}