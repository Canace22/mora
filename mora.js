const [y, x, z] = [
	["img/scissors.jpg", "img/stone.jpg", "img/cloth.jpg", "img/pre.jpg"],
	[0.33, 0.67],
	["哈哈，你赢了！！！", "很遗憾，你输了呢...", "打平啦！什么鬼！！！", ""]
]

let SumTimes = 0;
let Sumsuss = 0;
let Sumfail = 0;
let Sumtied = 0;

function Add(ab) {
	const [suma, sumb, sumc, sumd] = [
		document.getElementById("suma"),
		document.getElementById("sumb"),
		document.getElementById("sumc"),
		document.getElementById("sumd")
	]
	SumTimes++;

	if (ab == "02" || ab == "10" || ab == "21") {
		Sumsuss++;
		suma.innerHTML = Sumsuss;
	}

	if (ab == "00" || ab == "11" || ab == "22") {
		Sumfail++;
		sumb.innerHTML = Sumfail;
	}

	if (ab == "01" || ab == "12" || ab == "20") {
		Sumtied++;
		sumc.innerHTML = Sumtied;
	}

	let rate = (Sumsuss / SumTimes) * 100;
	//toFixed() 方法可把 Number 四舍五入为指定小数位数的数字
	sumd.innerHTML = String(rate.toFixed(2)) + "%";
}

function Act(nSrc, aNum, bNum, cNum, d) {
	const [computer, result, person, rd] = [
		document.getElementById("computer"),
		document.getElementById("result"),
		document.getElementById("person"),
		Math.random()
	]

	person.src = y[nSrc];

	if (rd < x[0]) {
		computer.src = y[0];
		result.innerHTML = z[aNum];
		Add(String(nSrc) + String(0));
	} else if (rd < x[1]) {
		computer.src = y[1];
		result.innerHTML = z[bNum];
		Add(String(nSrc) + String(1));
	} else {
		computer.src = y[2];
		result.innerHTML = z[cNum];
		Add(String(nSrc) + String(2));
	}
}

function mora() {
	const [s, st, c, info, close] = [
		document.getElementById("s"),
		document.getElementById("st"),
		document.getElementById("c"),
		document.getElementById("info"),
		document.getElementById("close"),
	]

	info.style.display = 'block';

	close.onclick = () => {
		info.style.display = 'none';
	}

	s.onclick = () => {
		Act(0, 2, 1, 0);
	}

	st.onclick = () => {
		Act(1, 0, 2, 1);
	}

	c.onclick = () => {
		Act(2, 1, 0, 2);
	}
}