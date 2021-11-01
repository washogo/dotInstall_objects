'use strict';

{
  let i = 0;

  function showTime(){
    console.log(new Date());
    i++;
    if (i > 2){
      clearInterval(intervalId);
    }
  }

  const intervalId = setInterval(showTime, 1000);
}
/*関数を引数に取るときは返り値がないとundefinedとなる*/
/*繰り返し処理の一種*/
/*setInterval(関数, ミリ秒単位の数値)で関数をミリ秒単位で繰り返し実行する*/
/*clearIntervalで停止する*/