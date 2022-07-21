var scenes = [];
var game;
scenes.push(GameScene);

var config = {
	type: Phaser.AUTO,
	width: 900,
	height: 720,
	scene: scenes,
	physics: {
		default: "arcade",
		arcade: {
		  gravity: { y: 0 } // Top down game, so no gravity
		}
	},
	banner :{
			text:"frefgrefer"
	}
};

game = new Phaser.Game(config);
