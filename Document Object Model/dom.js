function changeFontSize(x) {
  //var elm = document.getElementsByTagName("p");
  var elm = document.querySelectorAll('p');
  
    elm[0].style.fontSize = x + "px";
    elm[1].style.fontSize = x + "px";
    elm[2].style.fontSize = x + "px";
}
function increaseFontSize(stt) {
	var pa = document.querySelector(stt);
	style = window.getComputedStyle(pa, null).getPropertyValue('font-size');
	currSize = parseFloat(style);
	if (currSize < 30) {
		pa.style.fontSize = (currSize + 1) + 'px';
	} else {
		pa.style.fontSize = currSize + 'px';
	}
}
function decreaseFontSize(stt) {
	var pa = document.querySelector(stt);
	style = window.getComputedStyle(pa, null).getPropertyValue('font-size');
	currSize = parseFloat(style);
	if (currSize < 30) {
		pa.style.fontSize = (currSize - 1) + 'px';
	} else {
		pa.style.fontSize = currSize - 'px';
	}
}


function changeColor() {
	var el= document.querySelectorAll('p');
	el[0].style.color= 'red';
	el[1].style.color= 'yellow';
	el[2].style.color= 'blue';
}
changeColor();
function changeBgColor() {
	var ell=document.querySelectorAll('p');
	ell[0].style.background= 'pink';
	ell[1].style.background= 'pink';
	ell[2].style.background= 'pink';
}
changeBgColor()
function copyContent(){
	var p2= document.getElementById('p2');
	p1.innerText=p2.innerText;
}
copyContent();

