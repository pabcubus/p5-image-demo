function Guy(x, y) {
	this.x = x;
	this.y = y;
	this.dir = 0;
	this.steps = 5;
	this.interval = {
		current: 0,
		step: 1
	};
	this.lastDir = 0;
	this.bullets = [];
	this.images = {
		'0_0': loadImage('images/dir_0_0.png'),
		'1_0': loadImage('images/dir_1_0.png'),
		'1_1': loadImage('images/dir_1_1.png'),
		'1_2': loadImage('images/dir_1_2.png'),
		'2_0': loadImage('images/dir_2_0.png'),
		'2_1': loadImage('images/dir_2_1.png'),
		'2_2': loadImage('images/dir_2_2.png'),
		'3_0': loadImage('images/dir_3_0.png'),
		'3_1': loadImage('images/dir_3_1.png'),
		'3_2': loadImage('images/dir_3_2.png'),
		'4_0': loadImage('images/dir_4_0.png'),
		'4_1': loadImage('images/dir_4_1.png'),
		'4_2': loadImage('images/dir_4_2.png'),
		'bullet': loadImage('images/bullet.png')
	}

	this.setDir = function(dir) {
		this.dir = dir;
	}

	this.show = function() {
		image(this.getImage(this.dir), this.x, this.y);

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
			'x': !horizontal ? (this.x + 38) : (this.dir == 2 ? (this.x - 25) : (this.x + 100)),
			'y': horizontal ? (this.y + 38) : (this.dir == 1 ? (this.y + 105) : (this.y - 30))
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

	this.stop = function(dir){
		this.dir = 0;
	}

	this.getImage = function(dir){
		dir = ((dir == 0) ? this.lastDir : dir);
		this.lastDir = dir;

		this.interval.step++;
		if (this.interval.step == 5) {
			this.interval.current = (this.interval.current == 2) ? 1 : (this.interval.current + 1);
			this.interval.step = 0;
		}

		var string = dir + '_' + (this.dir != 0 ? this.interval.current : 0);
		return this.images[string];
	}
}
