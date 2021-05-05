// Modified from Coding Train
// https://thecodingtrain.com/CodingChallenges/159-simple-pendulum-simulation

const gravity = -0.35,
	length = 200,
	origin = { x: 175, y: 5 };

let angle = Math.PI / -5,
	angleV = 0,
	bob = { x: 0, y: 0 };

function setup() {
	createCanvas(350, 300).parent("canvas");
	document.getElementsByTagName("main")[0].remove();
}

function draw() {
	angleV += gravity * sin(angle) / length;
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
