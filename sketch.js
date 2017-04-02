var particles = [];
var attractors = [];
var credits;
var looping = true;

var thousandArray = [];
for (var i = 0; i < 1000; i++) {
    thousandArray.push(i);
}
var thousandArray2 = [];

function preload() {
    loadJSON("lesjoiesconfuses.json", gotCredits);
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(51);
    for (var i = 0; i < 1000; i++) {

        var r = round(random(0, thousandArray.length - 1));
        // console.log(r);
        var rr = thousandArray[r];
        thousandArray.splice(r, 1);
        thousandArray2.push(rr);
        var p = new Particle(createVector(random(width) - width / 2, random(height) - height / 2));
        particles.push(p);
        var a = new Attractor(i, i);
        attractors.push(a);
    }

    noStroke();
}

function draw() {
    translate(width / 2, height / 2);
    background(0);
    for (var i = 0; i < 1000; i++) {
        attractors[i].update();
        // attractors[i].show();
        particles[i].update(attractors[i].pos);
        particles[i].show(i);
    }

}

function gotCredits(creditsJSON) {
    credits = creditsJSON;
    // console.log(credits);
}

function keyPressed() {
    if (keyCode === 32) {
        if (looping) {
            noLoop();
            looping = false;
        } else {
            loop();
            looping = true;
        }
    }
}
