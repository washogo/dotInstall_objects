'use strict';

{
  // console.log(Math.random());

  // 0, 1, 2
  // Math.floor(Math.random() * 3)
  // 0, ..., n
  // Math.floor(Math.random() * (n + 1))
  // min, ..., max
  // Math.floor(Math.random() * (max + 1 - min)) + min
  
  console.log(Math.floor(Math.random() * 6) + 1);
}
/*ランダムな整数値を生成する方法*/
/*max+1-minで範囲を指定して、+minで始まりを指定するイメージ*/