enchant();

window.onload = function () {
	var game = new Game(400, 500);  				//画面サイズを400*500にする。（このサイズだとスマホでも快適なのでおススメ）

	//結果ツイート時にURLを貼るため、このゲームのURLをここに記入
	var url = "https://twitter.com/hothukurou";
	url = encodeURI(url); //きちんとURLがツイート画面に反映されるようにエンコードする
	/////////////////////////////////////////////////
	//ゲーム開始前に必要な画像・音を読み込む部分


	//クリック音読み込み
	var ClickSound = "Click.wav";						//game.htmlからの相対パス
	game.preload([ClickSound]); 				//データを読み込んでおく

	//ぞう山くん画像
	var ZoyamaImg = "Zoyama.png";						//game.htmlからの相対パス
	game.preload([ZoyamaImg]);					//データを読み込んでおく

	//リトライボタン
	var B_Retry = "Retry.png";						//game.htmlからの相対パス
	game.preload([B_Retry]);					//データを読み込んでおく

	//ツイートボタン
	var B_Tweet = "Tweet.png";						//game.htmlからの相対パス
	game.preload([B_Tweet]);					//データを読み込んでおく
	
	var note1 = "note1.png";
	var note2 = "note2.png";
	var note3 = "note3.png";
	var note4 = "note4.png";
	var note5 = "note5.png";
	var note6 = "note6.png";
	var notea1 = "notea1.png";
	var notea2 = "notea2.png";
	var notea3 = "notea3.png";
	var notea4 = "notea4.png";
	var notea5 = "notea5.png";
	var notea6 = "notea6.png";
	var baloon = "baloon.png";
	
	game.preload([note1]);
	game.preload([note2]);
	game.preload([note3]);
	game.preload([note4]);
	game.preload([note5]);
	game.preload([note6]);
	game.preload([notea1]);
	game.preload([notea2]);
	game.preload([notea3]);
	game.preload([notea4]);
	game.preload([notea5]);
	game.preload([notea6]);
	game.preload([baloon]);

	//読み込み終わり
	/////////////////////////////////////////////////


	game.onload = function () {					//ロードが終わった後にこの関数が呼び出されるので、この関数内にゲームのプログラムを書こう

		/////////////////////////////////////////////////
		//グローバル変数 

		var Point = 0;									//ポイント
		var State = 0;								//現在のゲーム状態

		//グローバル変数終わり
		/////////////////////////////////////////////////



		var S_MAIN = new Scene();					//シーン作成
		game.pushScene(S_MAIN);  					//S_MAINシーンオブジェクトを画面に設置
		S_MAIN.backgroundColor = "#CCFFCC"; 			//S_MAINシーンの背景は黒くした

		//ポイント表示テキスト
		var S_Text = new Label(); 					//テキストはLabelクラス
		S_Text.font = "20px Meiryo";				//フォントはメイリオ 20px 変えたかったらググってくれ
		S_Text.color = '#F39800';		//色　RGB+透明度　今回は白
		S_Text.width = 400;							//横幅指定　今回画面サイズ400pxなので、width:400pxだと折り返して二行目表示してくれる
		S_Text.moveTo(100, 0);						//移動位置指定
		S_MAIN.addChild(S_Text);					//S_MAINシーンにこの画像を埋め込む

		S_Text.text = "音符ちゃんをおしてね"; //テキストに文字表示 Pointは変数なので、ここの数字が増える

		
		var music1 = new Sprite(65,65);
		music1.moveTo(40,120);
		music1.image = game.assets[note3];
		S_MAIN.addChild(music1);

		var music2 = new Sprite(65,65);
		music2.moveTo(120,100);
		music2.image = game.assets[note1];
		S_MAIN.addChild(music2);
		
		var music3 = new Sprite(65,60);
		music3.moveTo(200,100);
		music3.image = game.assets[note2];
		S_MAIN.addChild(music3);

		var music4 = new Sprite(65,65);
		music4.moveTo(270,120);
		music4.image = game.assets[note6];
		S_MAIN.addChild(music4);

		var music5 = new Sprite(65,65);
		music5.moveTo(80,340);
		music5.image = game.assets[note5];
		S_MAIN.addChild(music5);

		var music6 = new Sprite(65,65);
		music6.moveTo(230,340);
		music6.image = game.assets[note4];
		S_MAIN.addChild(music6);

		var baloon1 = new Sprite(55,55);
		baloon1.moveTo(music1.x+5, music1.y-60);
		baloon1.image = game.assets[baloon];
		baloon1.visible = false;
		S_MAIN.addChild(baloon1);

		var baloon2 = new Sprite(55,55);
		baloon2.moveTo(music2.x+5, music2.y-60);
		baloon2.image = game.assets[baloon];
		baloon2.visible = false;
		S_MAIN.addChild(baloon2);

		var baloon3 = new Sprite(55,55);
		baloon3.moveTo(music3.x+5, music3.y-60);
		baloon3.image = game.assets[baloon];
		baloon3.visible = false;
		S_MAIN.addChild(baloon3);

		var baloon4 = new Sprite(55,55);
		baloon4.moveTo(music4.x+5, music4.y-60);
		baloon4.image = game.assets[baloon];
		baloon4.visible = false;
		S_MAIN.addChild(baloon4);

		var baloon5 = new Sprite(55,55);
		baloon5.moveTo(music5.x+5, music5.y-60);
		baloon5.image = game.assets[baloon];
		baloon5.visible = false;
		S_MAIN.addChild(baloon5);

		var baloon6 = new Sprite(55,55);
		baloon6.moveTo(music6.x+5, music6.y-60);
		baloon6.image = game.assets[baloon];
		baloon6.visible = false;
		S_MAIN.addChild(baloon6);

		var label1 = new Label();
		var label2 = new Label();
		var label3 = new Label();
		var label4 = new Label();
		var label5 = new Label();
		var label6 = new Label();

		music1.ontouchend =function() {
			if(baloon1.visible) {
				baloon1.visible = false;
				S_MAIN.removeChild(label1);
			} else {
				baloon1.visible = true; 
				label1.font = "15px Meiryo";	
				label1.color = '#C71585';		
				label1.width = 15;
				label1.text = "お";
				label1.moveTo(baloon1.x+15,baloon1.y+15);
				S_MAIN.addChild(label1);
			}
		};

		music2.ontouchend = function() {
			if(baloon2.visible) {
				baloon2.visible = false;
				S_MAIN.removeChild(label2);
			} else {
				baloon2.visible = true;
				label2.font = "15px Meiryo";	
				label2.color = '#C71585';		
				label2.width = 15;
				label2.text = "め";
				label2.moveTo(baloon2.x+15,baloon2.y+15);
				S_MAIN.addChild(label2); 
			}
		};

		music3.ontouchend = function() {
			if(baloon3.visible) {
				baloon3.visible = false;
				S_MAIN.removeChild(label3);
			} else {
				baloon3.visible = true;
				label3.font = "15px Meiryo";	
				label3.color = '#C71585';		
				label3.width = 15;
				label3.text = "で";
				label3.moveTo(baloon3.x+15,baloon3.y+15);
				S_MAIN.addChild(label3);
			}
		};

		music4.ontouchend = function() {
			if(baloon4.visible) {
				baloon4.visible = false;
				S_MAIN.removeChild(label4);
			} else {
				baloon4.visible = true; 
				label4.font = "15px Meiryo";	
				label4.color = '#C71585';		
				label4.width = 15;
				label4.text = "と";
				label4.moveTo(baloon4.x+15,baloon4.y+15);
				S_MAIN.addChild(label4);
			}
		};

		music5.ontouchend = function() {
			if(baloon5.visible) {
				baloon5.visible = false;
				S_MAIN.removeChild(label5);
			} else {
				baloon5.visible = true; 
				label5.font = "15px Meiryo";	
				label5.color = '#C71585';		
				label5.width = 15;
				label5.text = "は";
				label5.moveTo(baloon5.x+15,baloon5.y+15);
				S_MAIN.addChild(label5);
			}
		};

		
		music6.ontouchend = function() {
			if(baloon6.visible) {
				baloon6.visible = false;
				S_MAIN.removeChild(label6);
			} else {
				baloon6.visible = true; 
				label6.font = "15px Meiryo";	
				label6.color = '#C71585';		
				label6.width = 15;
				label6.text = "せ";
				label6.moveTo(baloon6.x+15,baloon6.y+15);
				S_MAIN.addChild(label6);
			}
		};




		///////////////////////////////////////////////////
		//メインループ　ここに主要な処理をまとめて書こう
		var resultLabel = new Label();

		game.onenterframe = function () {
			if(baloon1.visible && baloon2.visible && baloon3.visible && 
				baloon4.visible && baloon5.visible && baloon6.visible) {
				resultLabel.font = "20px Meiryo";	
				resultLabel.color = '#FF00FF';	
				resultLabel.width = 300;
				resultLabel.text = "Happy Birthday HASE!!";
				resultLabel.moveTo(80,220);
				S_MAIN.addChild(resultLabel);
			} else {
				S_MAIN.removeChild(resultLabel);
			}
		};


	};
	game.start();
};
