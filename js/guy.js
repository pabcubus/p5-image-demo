function Guy(x, y) {
	this.x = x;
	this.y = y;
	this.dir = 0;
	this.steps = 5;
	this.bullets = [];
	this.images = {
		'0': loadImage('images/dir_0.jpg'),
		'1': loadImage('images/dir_1.jpg'),
		'2': loadImage('images/dir_2.jpg'),
		'3': loadImage('images/dir_3.jpg'),
		'4': loadImage('images/dir_4.jpg'),
		'bullet': loadImage('images/bullet.jpg')
	}

	this.setDir = function(dir) {
		this.dir = dir;
	}

	this.show = function() {
		image(this.images[this.dir], this.x, this.y);

		for (var i = 0; i < this.bullets.length; i++){
			var bullet = this.bullets[i];
			image(this.images.bullet, bullet.x, bullet.y);
			this.moveBullet(bullet);
		}
	}

	this.addToDir = function(dir, value){
		this[dir] = this[dir] + (this.steps * value);
	}

	this.shootBullet = function(){
		if (this.dir == 0) this.dir = 1;
		var horizontal	= (this.dir == 2 || this.dir == 4) ? true : false;

		var bullet		= {
			'dir': this.dir,
			'x': !horizontal ? (this.x + 50) : (this.dir == 2 ? (this.x - 25) : (this.x + 100)),
			'y': horizontal ? (this.y + 50) : (this.dir == 1 ? (this.y + 105) : (this.y - 30))
		};

		this.bullets.push(bullet);
	}

	this.moveBullet = function(bullet){
		var speed = this.steps + 10;

		if (bullet.dir == 1)
			bullet.y += speed;
		if (bullet.dir == 2)
			bullet.x -= speed;
		if (bullet.dir == 3)
			bullet.y -= speed;
		if (bullet.dir == 4)
			bullet.x += speed;
	}
}
