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