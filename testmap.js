var mapscene = new Phaser.Scene('MapScene');
var map;
var tileset;
var layer;

mapscene.preload = function()
{
	this.load.tilemapTiledJSON("tilemap", "maps/level2.json");
	this.load.image("walls", "design/walls60x60/sol60x60.png", { frameWidth: 60, frameHeight: 60 });
};

mapscene.create= function()
{
	map = this.add.tilemap("tilemap");
	tileset = map.addTilesetImage("sol60x60", "walls");
	layer = map.createStaticLayer("Calque de Tile 1", tileset, 0, 0);

};

mapscene.update= function()
{

};