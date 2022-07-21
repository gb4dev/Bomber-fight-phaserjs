class Player {

	constructor(scene) {
	  this.scene = scene;
	  this.sprite = scene.physics.add.sprite(90,150, 'player'); // set position
	  
	  this.sprite.body.setSize(30,30, 0,30); // size + offset
	  this.sprite.body.setOffset(15,30); // offset middle bottom
	  this.cursors = scene.input.keyboard.createCursorKeys();
		this.nbBomb = 2;
		this.bombCount = 0;

		scene.anims.create({
			key: 'downPlayer',
			frames: scene.anims.generateFrameNumbers('player', { start: 0, end: 2 }),
			frameRate: 10,
			repeat: -1
		});
		scene.anims.create({
			key: 'leftPlayer',
			frames: scene.anims.generateFrameNumbers('player', { start: 3, end: 5 }),
			frameRate: 10,
			repeat: -1
		});
		scene.anims.create({
			key: 'rightPlayer',
			frames: scene.anims.generateFrameNumbers('player', { start: 6, end: 8 }),
			frameRate: 10,
			repeat: -1
		});
		scene.anims.create({
			key: 'upPlayer',
			frames: scene.anims.generateFrameNumbers('player', { start: 9, end: 11 }),
			frameRate: 10,
			repeat: -1
		});
		this.sprite.setDepth(100);
		}

	update(){
		this.sprite.body.setVelocity(0);
		if (this.cursors.left.isDown)
		{
			this.sprite.anims.play('leftPlayer', true);
			this.sprite.body.setVelocityX(-100);
		}
		else if (this.cursors.right.isDown)
		{
			this.sprite.anims.play('rightPlayer', true);
			this.sprite.body.setVelocityX(100);
		}
		else if (this.cursors.up.isDown)
		{
			this.sprite.anims.play('upPlayer', true);
			this.sprite.body.setVelocityY(-100);
		}
		else if (this.cursors.down.isDown)
		{
			this.sprite.anims.play('downPlayer', true);
			this.sprite.body.setVelocityY(100);
		}
		else if (this.cursors.space.isDown)
		{
			if(this.bombCount < this.nbBomb) this.scene.PutBomb(this);
		}
		else{
			this.sprite.anims.stop();
		}
		this.sprite.body.velocity.normalize().scale(100);
	}
  }