class MapManager {

	constructor(scene) {
		this.scene = scene;
		this.map = this.scene.add.tilemap("map");
		this.tiles = this.map.addTilesetImage("walls60x60", "walls");
		this.groundLayer = this.map.createDynamicLayer("background", this.tiles, 0, 0);
		this.blocksLayer = this.map.createDynamicLayer("blocksground", this.tiles, 0, 0);
		this.overLayer = this.map.createDynamicLayer("overground", this.tiles, 0, 0);
		this.overLayer.setDepth(150);

		this.groundLayer.setCollisionByProperty({ collides: true });
		this.blocksLayer.setCollisionByProperty({ collides: true });
		
	}

	setCollision(player){
		this.scene.physics.add.collider(player.sprite, this.groundLayer);
		this.scene.physics.add.collider(player.sprite, this.blocksLayer);
	}

}