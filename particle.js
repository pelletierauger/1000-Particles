var Particle = function(pos) {
    this.pos = pos;
    this.vel = new p5.Vector(0, 0);
}

Particle.prototype.reset = function() {
    this.pos = new p5.Vector(0, 0);
    this.vel = new p5.Vector(0, 0);
};

Particle.prototype.update = function(vec) {
    var mapFriction = map(frameCount, 0, 200, 0.999, 0.91);
    this.acc = p5.Vector.sub(vec, this.pos);
    // if (norma) {
    //     this.acc.normalize();
    // }
    this.acc.mult(0.0025);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.mult(mapFriction);
};

Particle.prototype.show = function(i) {
    var maps = map(sin(i), -1, 1, 150, 255);
    fill(30, 50, maps);
    ellipse(this.pos.x, this.pos.y, 9);
};
