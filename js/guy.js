function Guy(x, y) {
	this.x = x;
	this.y = y;
	this.dir = 0;
	this.images = {
		0: loadImage('images/dir_0.jpg'),
		1: loadImage('images/dir_1.jpg'),
		2: loadImage('images/dir_2.jpg'),
		3: loadImage('images/dir_3.jpg'),
		4: loadImage('images/dir_4.jpg')
	}
	this.steps = 3;

	this.setDir = function(dir) {
		this.dir = dir;
	}

	this.show = function() {
		image(this.images[this.dir], this.x, this.y);
	}

	this.update = function() {
		if (this.dir == 1)
			this.y += this.steps;
		if (this.dir == 2)
			this.x -= this.steps;
		if (this.dir == 3)
			this.y -= this.steps;
		if (this.dir == 4)
			this.x += this.steps;
	}
}
