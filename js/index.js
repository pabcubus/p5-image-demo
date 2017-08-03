var guy;

function setup() {
	guy = new Guy(100, 100);
	createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
	frameRate(30);

	if (keyIsDown(LEFT_ARROW))
		guy.setDir(2);

	if (keyIsDown(RIGHT_ARROW))
		guy.setDir(4);

	if (keyIsDown(UP_ARROW))
		guy.setDir(3);

	if (keyIsDown(DOWN_ARROW))
		guy.setDir(1);

	clear();
	guy.update();
	guy.show();
}

function keyReleased() {
	guy.setDir(0);
}
