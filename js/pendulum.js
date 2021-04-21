// Modified from Coding Train
// https://thecodingtrain.com/CodingChallenges/159-simple-pendulum-simulation.html

const gravity = 0.35,
	length = 200,
	origin = { x: 175, y: 5 };

let angle = Math.PI / -5,
	angleV = 0,
	angleA = 0,
	bob = { x: 0, y: 0 };

function setup() {
	createCanvas(350, 300).parent("canvas");
}

function draw() {
	angleA = -gravity * sin(angle) / length;
	angleV += angleA;
	angle += angleV;

	// angleV *= 0.99;

	bob.x = length * sin(angle) + origin.x;
	bob.y = length * cos(angle) + origin.y;

	background(36);
	stroke(255);
	strokeWeight(2);
	line(origin.x, origin.y, bob.x, bob.y);
	circle(bob.x, bob.y, 48);
}
