var Attractor = function(t, tt) {
    this.pos = new p5.Vector(0, 0);
    this.t = t;
    this.init = tt;
}

Attractor.prototype.update = function() {
    var mapR = map(sin(this.t / 8), -1, 1, 0, 5);
    var mapNX = map(noise(this.init + this.t / 10), 0, 1, 0, 32);
    var mapNY = map(noise(this.init + 100 + this.t / 10), 0, 1, 0, 32);
    var maps = map(frameCount, 0, 40, 0, 1);
    maps = constrain(maps, 0, 1);
    // maps = 1;
    this.t++;
    // this.pos.x = cos(this.t/10) * 150;
    // this.pos.y = sin(this.t/10) * 150;
    var posx = cos(this.init / 10) * 150;
    var posy = sin(this.init / 10) * 150;
    var crex = credits[this.init][0] + mapNX + 20;
    var crey = credits[this.init][1] + mapNY + 5;
    this.pos.x = lerp(posx, crex, maps);
    this.pos.y = lerp(posy, crey, maps);
};

Attractor.prototype.show = function() {
    fill(255, 255, 0);
    ellipse(this.pos.x, this.pos.y, 2);
};
