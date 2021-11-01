'use strict';

{
  const otherProps = {
    r: 4,
    color: 'red',
  };

  const point = {
    x: 100, 
    y: 180,
    ...otherProps,
  };
  // console.log(point);
  /*スプレッド構文*/

  const {x, r, ...others} = point;
  console.log(x);
  console.log(r);
  console.log(others);
  /*分割代入とレスト構文*/
}