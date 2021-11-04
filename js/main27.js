'use strict';

{
  const name = 'taguchi';
  // const name = 5;

  try{
    console.log(name.toUpperCase());
  }catch(e){
    console.log(e);
  }

  console.log('Finish!');
}

/*toUpperCase()は文字列を大文字にする命令*/
/*開発者が想定していなかった理由で起きるエラーを例外という*/
/*try{}で囲う、例外が出ても処理を止めたくない時に使う*/