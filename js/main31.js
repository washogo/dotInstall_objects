'use strict';

{
  class Post{
    constructor(text){
    this.text = text;
    this.likeCount = 0;
    }

      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
      }
  }
  //classの作成
  //constructor()は初期化するメソッド

  const posts = [
    new Post('JavaScriptの勉強中・・・'),
    new Post('プログラミングは楽しい！')
  ];
  //オブジェクトをクラスのインスタンス化する

  
  posts[0].show();
  posts[1].show();
}
/*クラス,constructor,インスタンス*/