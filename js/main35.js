'use strict';

{
  class Post{ // 親クラス
    constructor(text){
    this.text = text;
    this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }
    
    like() {
      this.likeCount++;
      this.show();
    }
  }
  class SponsoredPost extends Post{ // 子クラス
    constructor(text, sponsor){
      super(text);
      this.sponsor = sponsor;
    }
  
    show() {
      super.show();
      console.log(`... sponsored by ${this.sponsor}`);
    }
  }
  
  
  const posts = [
    new Post('JavaScriptの勉強中・・・'),
    new Post('プログラミングは楽しい！'),
    new SponsoredPost('３ふん動画でマスターしよう', 'dotinstall'),
  ];
  
  posts[2].show();
  posts[2].like();
}
/*クラスの継承*/
/*コードを追加したり変更するときはsuperを用いて親クラスを参照する*/
/*そうでないなら、クラスを継承したことによって、型を持っているから、記述がなくても、メソッドを保持している*/