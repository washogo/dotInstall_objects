'use strict';

{
  const posts = [
    {
      text: 'JavaScriptの勉強中・・・',
      likeCount: 0,
      // show: function (){
      //   console.log(`${this.text} - ${this.likeCount}いいね`);
      // }
      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
      }
    },
    {
      text: 'プログラミングは楽しい！',
      likeCount: 0,
      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
      }
    },
  ];

  // show(posts[0]);
  posts[0].show();
  posts[1].show();
}
/*オブジェクトのプロパティの値には関数を取ることができる*/
/*これはメソッドと呼ばれる*/