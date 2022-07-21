class Bomb extends Phaser.GameObjects.Sprite{
	constructor(scene, x, y, player){
		super(scene, x, y, "bomb");
		this.scene = scene;
		//this.sprite = scene.physics.add.sprite(x, y, 'bomb');
		this.player = player;
		this.setDepth(99);
		scene.add.existing(this);
	}
}