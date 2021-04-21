// Modified from Coding Train
// https://thecodingtrain.com/CodingChallenges/159-simple-pendulum-simulation.html

const gravity = 1,
	length = 200,
	origin = { x: 300, y: 5 };

let angle = Math.PI / 4,
	angleV = 0,
	angleA = 0,
	bob = { x: 0, y: 0 };

function setup() {
	createCanvas(600, 300);
}

function draw() {
	angleA = -gravity * sin(angle) / length;
	angleV += angleA;
	angle += angleV;

	// angleV *= 0.99;

	bob.x = length * sin(angle) + origin.x;
	bob.y = length * cos(angle) + origin.y;

	background(0);
	stroke(255);
	strokeWeight(2);
	line(origin.x, origin.y, bob.x, bob.y);
	circle(bob.x, bob.y, 48);
}