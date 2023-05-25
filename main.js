const imp1Element = document.querySelector("#imp1");
const f1Element = document.querySelector("#f1");
const imp2Element = document.querySelector("#imp2");
const f2Element = document.querySelector("#f2");

const RElement = document.querySelector("#R");
const CElement = document.querySelector("#C");
const P1Element = document.querySelector("#P1");
const P2Element = document.querySelector("#P2");

const updateResults = () => {
	const w1 = f1Element.value * 2 * Math.PI;
	const w2 = f2Element.value * 2 * Math.PI;
	const Z1 = imp1Element.value;
	const Z2 = imp2Element.value;

	const R = ((Z1**2 - (Z1*w1/w2)**2)/(1 - (Z1*w1/Z2/w2)**2))**0.5;
	const C = (R**2 - Z2**2)**0.5/(Z2*w2*R);
	const C_nF = C * 1000000000;
	const P1 = - Math.atan(w1 * C * R);
	const P2 = - Math.atan(w2 * C * R);

	RElement.textContent = `R = ${Math.round(R)} Ω.`
	CElement.textContent = `C = ${C_nF.toFixed(2)} nF.`
	P1Element.textContent = `Phase of the first signal = ${P1.toFixed(3)} radians.`
	P2Element.textContent = `Phase of the second signal = ${P2.toFixed(3)} radians.`
}


document.querySelectorAll("input").forEach((element) => element.addEventListener('click', updateResults));
updateResults();