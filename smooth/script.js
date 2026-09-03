$(function() {
  // ナビゲーションをクリック
  // hrefが、#から始まらないもの／#だけのものを除外
  $("a[href*='#']:not([href='#'])").click(function () {
    // 移動先のコンテンツの位置を取得
    let target = $($(this).attr("href")).offset().top;

    target -= 70;

    // コンテンツへスクロール
    $("html, body").animate({ scrollTop: target }, 500);

    return false;
  });
});