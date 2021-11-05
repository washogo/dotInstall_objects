'use strict';

{
  class Post{
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
 
  
  const posts = [
    new Post('JavaScriptの勉強中・・・'),
    new Post('プログラミングは楽しい！')
  ];
  
  posts[0].like();
  // post[0].likeCount++;
  // post[0].likeCount++;
  // post[0].likeCount++;
  // post[0].likeCount++;
  
  // posts[0].show();
  // posts[1].show();
}
/*カプセル化*/
/*プロパティを直接操作せずにメソッドを介して操作する*/