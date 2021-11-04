'use strict';

{
  let i = 0;

  function showTime(){
    console.log(new Date());
    const timeoutId = setTimeout(showTime, 1000);
    i++;
    if(i > 2){
      clearTimeout(timeoutId);
    }
  }

  showTime();
}
/*setTimeout()は指定した時間の後に１回だけ処理を実行するように予約する命令*/

//setIntervalは一定時間後に処理を実行する
///ただし、処理に時間がかかった場合は２つの処理が重なる場合がある

//setTimeoutも一定時間後に処理を実行する
///処理が実行されてからインターバルが開始するため、処理が重ならない