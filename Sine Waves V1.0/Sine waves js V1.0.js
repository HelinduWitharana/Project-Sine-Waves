let amplitude = amplitude_slider.value;
let wavelength = wavelength_slider.value;
let frequency = frequency_slider.value;

let v = 0;
let f = 0;
let l = 0;

var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");

c.width = 1500;
c.height = 254;

frequency = (frequency/1000);
let increment = frequency;

function animate() {
	 requestAnimationFrame(animate)
	 
	 amplitude = amplitude_slider.value;
	 amplitude = amplitude/10;
	 
	 wavelength = wavelength_slider.value;
	 wavelength = (wavelength/10);
	 
	 frequency = frequency_slider.value;
	 frequency = (frequency/1000);
	 
	 ctx.clearRect(0, 0, c.width, c.height);
	 ctx.beginPath();
	 ctx.moveTo(0,c.height/2);

	 for (let i = 0; i < c.width; i++) {
		 ctx.lineWidth = 3;
		 ctx.lineTo(i,c.height/2 + Math.sin(i / wavelength + increment) * amplitude);
		}
	 ctx.stroke();
	 
	 /*
	 console.log("Amplitude"+amplitude);
	 console.log("Wavelength"+wavelength);
	 console.log("Increment"+increment);
	 */
	 
	 increment = increment+frequency;
	}
animate();

function Formula_calculate() {
	 wavelength = wavelength_slider.value;
	 frequency = frequency_slider.value;
	 
	 f = frequency;
	 l = wavelength;
	 
	 v = f*l;
	 
	 document.getElementById("Formula").innerHTML = v + "=" + f + "×" + l;
	}
Formula_calculate();

// © Helindu Witharana