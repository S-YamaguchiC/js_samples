/*
  入力を受け取る
*/
function getVal() {
  const val1 = document.getElementById("val1");
  document.getElementById("a1").innerHTML = "式： y = "+ val1.value +"x^2";

  // 描画関数の呼び出し
  createGraph(val1.value)
}


/*
  グラフの描画処理
  @val 比例定数
  @reference https://mmsankosho.com/prog-nijikansunogurahu/
*/
function createGraph(val) {
  // colors
  const colors = ["black", "blue","red","orange", "green", "cyan"]; // 配列に線の色を入れておきます
  // 絶対値(マイナス値用)
  const abs = Math.sqrt(val * val)

  // 出力位置
  const target = document.getElementById("graph");

  let x1 = -5, y1, x2, y2;
  let a = val, b = 0; // y=ax^2+b の a,b の値

  for(let i=0; i < 100; i++) { //処理を100回繰り返し

    y1 = a * x1 * x1 + b;    //始点のy座標を求める
    //始点のx座標より0.1大きい値を終点のx座標とする
    x2 = x1 + 0.2;
    y2 = a * x2 * x2 + b;    //終点のy座標を求める

    //始点と終点の座標をもとに直線を引く
    target.innerHTML += '<g transform="translate(200,200)scale(40,-40)">'
      + '<line x1='+x1+' y1='+y1+' x2='+x2+' y2='+y2+' stroke='+colors[abs]+' stroke-width="0.05"/></g>';

    x1 = x2;    //終点のx座標を次の始点のx座標とする
  };
  target.innerHTML += '</svg>';
}
