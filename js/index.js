import { StartScreen } from './scenes/startScreen.js';

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 500,
	scene: [StartScreen],
	physics: {
		default: 'arcade',
		arcade:{
			debug: false
		}
	},
	scale:{
    	mode: Phaser.Scale.FIT,
    	autoCenter: Phaser.Scale.CENTER_BOTH
  	}
}
var game = new Phaser.Game(config);