var GameScene = new Phaser.Scene('GameScene');
var player;
var mapManager;
var groupBomb;

GameScene.preload = function()
{
	this.load.spritesheet('player', 'images/playerImages/player60.png', { frameWidth: 60, frameHeight: 60 });
	this.load.image("bomb", "images/bomb/bombe.png");
	this.load.image("walls", "design/walls60x60.png", { frameWidth: 60, frameHeight: 60 });
	this.load.tilemapTiledJSON("map", "maps/level1.json");
};

GameScene.create= function()
{
	player = new Player(this);
	mapManager = new MapManager(this);
	mapManager.setCollision(player);
	groupBomb = this.physics.add.group();

};

GameScene.update= function()
{
	player.update();

};

GameScene.PutBomb = function(player){
	currentTile = worldXYToTileXY(player.sprite.getCenter());
	console.log("tile bombe a poser : "+currentTile.x + " " +currentTile.y);
	if(tileIsEmpty(currentTile)){
		console.log("pas de bombe");
		centerTile = new Phaser.Math.Vector2(currentTile.x*60+30, currentTile.y*60+30);
		bomb = new Bomb(this, centerTile.x, centerTile.y, player);
		console.log(bomb);
		groupBomb.add(bomb);
		player.bombCount += 1;
	}
	else{
		console.log("bomb !");
	}
}

function tileIsEmpty(tileBomb){
	empty = true;
	groupBomb.children.iterate(function(bomb){
		var tile = worldXYToTileXY(bomb.getCenter());
		console.log("tile bombe parcouru : "+tile.x + " "+ tile.y);
		if(tile.x == tileBomb.x && tile.y == tileBomb.y) empty == false;
	});
	/*groupBomb.children.forEach(function(bomb){
		var tile = worldXYToTileXY(bomb.getCenter());
		console.log("tile bombe parcouru : "+tile.x + " "+ tile.y);
		if(tile.x == tileBomb.x && tile.y == tileBomb.y) empty == false;
	});*/
	return empty;
}

function worldXYToTileXY(worldxy){
	return new Phaser.Math.Vector2(Math.floor(worldxy.x/60), Math.floor(worldxy.y/60));
}