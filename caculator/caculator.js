var s='';

function number1(){
	x='1';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function number2(){
	x='2';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function number3(){
	x='3';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function number4(){
	x='4';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function number5(){
	x='5';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function number6(){
	x='6';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function number7(){
	x='7';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function number8(){
	x='8';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function number9(){
	x='9';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function number0(){
	x='0';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttononclear(){
	s='';
	document.getElementById("result").innerText = s; 
	document.getElementById("result1").innerText = '';
}
function buttonondel(){
	x=s.slice(0,s.length-1);
	s=x;
	document.getElementById("result").innerText = s; 
}
function binhphuong(){
	
    document.getElementById("result1").innerText = Math.pow(x,2); 
}
function phantram(){
	x='%';
	var t=s+x;
	document.getElementById("result").innerText = t; 
	s=s+'/100'
}
function buttononmultiplication(){
	x='*';s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttonondivi(){
	x='/';s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttononplus(){
	x='+';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttononsub(){
	x='-';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function buttononfinish(){
	document.getElementById("result1").innerText = eval(s);

}
