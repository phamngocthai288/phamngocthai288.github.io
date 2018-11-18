var s='';

function number1(){
	x='1';
	s=s+x;
	document.getElementById("caculator").innerText = s; 
}
function number2(){
	x='2';
	s=s+x;
	document.getElementById("caculator").innerText = s; 
}
function number3(){
	x='3';
	s=s+x;
	document.getElementById("caculator").innerText = s; 
}
function number4(){
	x='4';
	s=s+x;
	document.getElementById("caculator").innerText = s; 
}
function number5(){
	x='5';
	s=s+x;
	document.getElementById("caculator").innerText = s; 
}
function number6(){
	x='6';
	s=s+x;
	document.getElementById("caculator").innerText = s; 
}
function number7(){
	x='7';
	s=s+x;
	document.getElementById("caculator").innerText = s; 
}
function number8(){
	x='8';
	s=s+x;
	document.getElementById("caculator").innerText = s; 
}
function number9(){
	x='9';
	s=s+x;
	document.getElementById("result").innerText = s; 
}
function number0(){
	x='0';
	s=s+x;
	document.getElementById("caculator").innerText = s; 
}
function xoahet(){
	s='';
	document.getElementById("caculator").innerText = s; 
	document.getElementById("caculator1").innerText = '';
}
function xoa1(){
	x=s.slice(0,s.length-1);
	s=x;
	document.getElementById("caculator").innerText = s; 
}
function binhphuong(){
	s=s*s;
	t=s;
    document.getElementById("caculator1").innerText = t;
}
function phantram(){
	x='%';
	var t=s+x;
	document.getElementById("caculator").innerText = t; 
	s=s+'/100'
}
function phepnhan(){
	x='*';s=s+x;
	document.getElementById("caculator").innerText = s; 
}
function phepchia(){
	x='/';
	s=s+x;
	document.getElementById("caculator").innerText = s; 
}
function phepcong(){
	x='+';
	s=s+x;
	document.getElementById("caculator").innerText = s;
}

function mu3(){
	s=s*s*s;
	x=s;
	document.getElementById("caculator1").innerText = x;
	
}
function pheptru(){
	x='-';
	s=s+x;
	document.getElementById("caculator").innerText = s; 
}
function bang(){
	document.getElementById("caculator1").innerText = eval(s);

}
function can(){
	s=Math.sqrt(s);
	x=s;
	document.getElementById('caculator1').innerText = x;

}
var tam = '';
var count = 0;

function daucham() {
    x='.';
    s=s+x;
    document.getElementById("caculator").innerText = s;
}


