var y = ["img/scissors.jpg", "img/stone.jpg", "img/cloth.jpg", "img/pre.jpg"];
var x = [0.33, 0.67];
var z = ["哈哈，你赢了！！！", "很遗憾，你输了呢...", "打平啦！什么鬼！！！", ""];

var SumTimes = 0;
var Sumsuss = 0;
var Sumfail = 0;
var Sumtied = 0;

function Add(ab){
	var suma = document.getElementById("suma");
	var sumb = document.getElementById("sumb");
	var sumc = document.getElementById("sumc");
	var sumd = document.getElementById("sumd");
	SumTimes++;

	if(ab == "02" || ab == "10" || ab == "21"){
		Sumsuss++;
		suma.innerHTML = Sumsuss;
	}

	if(ab == "00" || ab == "11" || ab == "22"){
		Sumfail++;
		sumb.innerHTML = Sumfail;
	}

	if(ab == "01" || ab == "12" || ab == "20"){
		Sumtied++;
		sumc.innerHTML = Sumtied;
	}

	var rate = (Sumsuss / SumTimes)*100;
	//toFixed() 方法可把 Number 四舍五入为指定小数位数的数字
	sumd.innerHTML = String(rate.toFixed(2)) + "%";
}

function Act(nSrc, aNum, bNum, cNum,d){
	var s = document.getElementById("s");
	var st = document.getElementById("st");
	var c = document.getElementById("c");
	var rst = document.getElementById("rst");
	var computer =  document.getElementById("computer");
	var result = document.getElementById("result");
	var person = document.getElementById("person");
	var rd = Math.random();

	person.src = y[nSrc];

	if (rd < x[0]) {
		computer.src = y[0];
		result.innerHTML = z[aNum];
		Add(String(nSrc) + String(0));
	}else if (rd < x[1]) {
		computer.src = y[1];
		result.innerHTML = z[bNum];
		Add(String(nSrc) + String(1));
	}else{
		computer.src = y[2];
		result.innerHTML = z[cNum];
		Add(String(nSrc) + String(2));
	}
} 

function mora() {

	s.onclick = function(){
		Act(0, 2, 1, 0);
	}

	st.onclick = function(){
		Act(1, 0, 2, 1);
	}

	c.onclick = function(){
		Act(2, 1, 0, 2);
	}
}

