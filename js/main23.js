'use strict';

{
  // alert('hello');

  const answer = confirm('削除しますか？');
  if (answer){
    console.log('削除しました');
  }else{
    console.log('キャンセルしました');
  }
}
/*alert()でメッセージを表示する、confirmで「キャンセル」or「OK」を表示する
  confirmの返り値は真偽値である*/