var guy;
var width;
var height;

function setup() {
	guy = new Guy(100, 100);
	width = windowWidth;
	height = windowHeight;

	createCanvas(800, 500);
}

function draw() {
	frameRate(40);

	if (keyIsDown(DOWN_ARROW)) {
		guy.addToDir('y', 1);
		guy.setDir(1);
	}

	if (keyIsDown(UP_ARROW)) {
		guy.addToDir('y', -1);
		guy.setDir(3);
	}

	if (keyIsDown(LEFT_ARROW)) {
		guy.addToDir('x', -1);
		guy.setDir(2);
	}

	if (keyIsDown(RIGHT_ARROW)) {
		guy.addToDir('x', 1);
		guy.setDir(4);
	}

	clear();
	guy.show();
}

function keyTyped() {
	if (key == ' ') {
		guy.shootBullet();
	}
}
