$(function() {
  // バナー用配列
  let bannerArray = ["red", "yellow", "green", "blue", "brown"];

  // 0〜1未満の乱数を生成：値域 0〜0.9999...
  let num = Math.random()

  // numに5を掛ける：値域 0〜4.9999...
  num = num * 5;

  // 小数点を切り捨てる：値域 0, 1, 2, 3, 4 のどれかになる
  num = Math.floor(num);

  // バナーを表示
  $("aside img").attr("src", "img/" + bannerArray[num] + ".jpg");
});