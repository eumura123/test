// シーンクラス
// 他のJSファイルから呼び出された場合はシーンを返す
class MainScene extends Phaser.Scene {
    // コンストラクタ
    constructor() {
        // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
        super('MainScene');
    }
    // シーンの事前読み込み処理
    preload() {
        // 画像の読み込み(使用する時の名前, パス)
        this.load.image('sky', 'assets/sky.png');
         this.load.image('back', 'assets/back.png');
         this.load.image('ground', 'assets/platform.png');
         this.load.image('alien1', 'assets/alien1.png');
         this.load.image('alien2', 'assets/alien2.png');
         this.load.image('alien3', 'assets/alien3.png');
         this.load.image('platform', 'assets/platform.png');
         this.load.image('block', 'assets/block.png');
         this.load.image('bomb', 'assets/bomb.png');
         this.load.image('star', 'assets/star.png');
         this.load.image('coin', 'assets/coin.png');
    }
    // シーン初期化処理
    create() {
        // 単体画像をシーンに追加(X座標,Y座標,画像名)
        this.add.image(400, 300, 'sky');
        // 星を(200,200)に追加
        this.add.image(200, 200, 'star');
        // エイリアンを(200,200)に追加
        this.player = this.add.image(500, 350, 'alien1');
        // プレイヤーの移動方向フラグを設定　１：右向き　−１：左向き
        this.player_direction = 1;
        this.player2 = this.add.image(500, 350, 'alien2');
        this.player2_direction = 1;
        this.player3 = this.add.image(500, 350, 'alien3');
        this.player3_direction = 1;
    }
    // 毎フレーム実行される繰り返し処理
    update() {
        // プレイヤーの向きフラグを変更
        if (this.player.x >= D_WIDTH - 100) this.player_direction = -1;
        if (this.player.x <= 100) this.player_direction = 1;
        // プレイヤーの移動
        if (this.player_direction == 1) {
            this.player.x += 1;// 横方向へ移動を設定
        } else {
            this.player.x -= 1;// 横方向へ移動を設定
        }
        if (this.player2.y >= D_WIDTH - 100) this.player2_direction = -1;
        if (this.player2.y <= 100) this.player2_direction = 1;
        if (this.player2_direction == 1) {
            this.player2.y += 10;
        } else {
            this.player2.y -= 10;
        }
        if (this.player3.y >= D_WIDTH - 100) this.player3_direction = -1;
        if (this.player3.y <= 100) this.player3_direction = 1;
        if (this.player3_direction == 1) {
            this.player3.x += 5;
            this.player3.y += 5;
        } else {
            this.player3.x -= 5;
            this.player3.y -= 5;
        }
    }
}