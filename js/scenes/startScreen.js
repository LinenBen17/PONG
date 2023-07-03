export class StartScreen extends Phaser.Scene{
	constructor(){
		super({key:"startScreen"})
	}
	preload(){
		this.load.image("start", "images/startScene.png");
		this.load.spritesheet("buttonPlay", "images/sprites.png", {
			frameWidth:500,
			frameHeight:250
		});
	}
	create(){
		this.add.image(400,250,'start');
		this.buttonPlay = this.add.sprite(400, 400, 'buttonPlay');

		this.anims.create({
			key: 'buttonPlayAnimation',
			frames: this.anims.generateFrameNumbers('buttonPlay', {frames: [0,2,3,4,5,6,0]}),
			frameRate: 10,
			repeat: -1,
			repeatDelay: 3000,
		});

		this.buttonPlay.anims.play('buttonPlayAnimation');
		this.buttonPlay.setScale(0.5)
	}
}