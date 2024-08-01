// Loading画面アニメーションjs
$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1500).fadeOut('slow');//ロゴを1.5秒（1500ms）待機してからフェードアウト
});

// 画面遷移 背景色が伸びる（中央から外）
$(window).on('load',function(){
  $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
  $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
  });
  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  });

  // スライド
  $('.slider').slick({
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesToShow: 3,//スライドを画面に3枚見せる
		slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		dots: true,//下部ドットナビゲーションの表示
		responsive: [
		{
			breakpoint: 768,//モニターの横幅が426px以下の見せ方
			settings: {
				slidesToShow: 1,//スライドを画面に1枚見せる
				slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
			}
		}
	]
	});

// ナビゲーション
$(".openbtn1").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $("#blur").toggleClass('mainblur');//ぼかしたいエリアにmainblurクラスを付与
});
$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
	$(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
	$("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去し
	$("#blur").removeClass('mainblur');//ぼかしているエリアのmainblurクラスを除去
});

// スムーススクロール
    $(function(){
      $('a[href^="#"]').click(function(){
        var speed = 800;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top;
        $("body,html").animate({scrollTop:position},speed,"swing");
        return false;
      });
    });
   

// スクロールするとheader画像が拡大、コンテンツが重なる
$(window).scroll(function() {
	var scroll = $(window).scrollTop();//スクロール値を定義
//header-imgの背景
$('#header-img').css({
transform: 'scale('+(100 + scroll/10)/100+')',//スクロール値を代入してscale1から拡大.scroll/10の値を小さくすると拡大値が大きくなる
top: -(scroll/50)  + "%",//スクロール値を代入してtopの位置をマイナスにずらす
	});
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	GlowAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	//spanタグを追加する
	var element = $(".glowAnime");
	element.each(function () {
		var text = $(this).text();
		var textbox = "";
		text.split('').forEach(function (t, i) {
			if (t !== " ") {
				if (i < 10) {
					textbox += '<span style="animation-delay: .' + i + 's;">' + t + '</span>';
				} else {
					var n = i / 10;
					textbox += '<span style="animation-delay: ' + n + 's;">' + t + '</span>';
				}

			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});

	GlowAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

// form 送信ボタン
$(document).ready(function() {
	// 送信ボタンがクリックされたときの処理
	$('.btn btn-primary').click(function(e) {
			e.preventDefault(); // フォームのデフォルトの送信を防ぐ

			// ここで実際に送信処理を行う（例えばAjaxでサーバーにデータを送信するなど）

			// 送信完了メッセージを表示する
			$('#message').text('送信完了しました');
	});
});