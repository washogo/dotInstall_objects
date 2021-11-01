{
  // let x = 1;
  // let y = x;
  // x = 5;
  // console.log(x); // 5
  // console.log(y); // 1

  // let x = [1, 2];
  // let y = x;
  // x[0] = 5;
  // console.log(x); // [5, 2]
  // console.log(y); // [5, 2]
  /*複雑なデータ型の場合（今回は配列）は、
    値がどこに格納されているかという情報だけが作られることになる*/

  let x = [1, 2];
  let y = [...x];
  x[0] = 5;
  console.log(x); // [5, 2]
  console.log(y); // [1, 2]
  /*値を格納したい場合には、スプレッド演算子を使う*/

}