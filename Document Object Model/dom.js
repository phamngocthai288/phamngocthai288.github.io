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
// Execute
changeColor();

// Thay đổi màu nền
function changeBgColor(x) {
	document.querySelector('div').style.backgroundColor = x;
};
// Execute
changeBgColor("pink");

// Sao chép nội dung đoạn văn 1,2
function copyContent(x, y) {
	document.getElementById(x).innerHTML = document.getElementById(y).innerHTML;
};
// Execute
copyContent('p1', 'p2');
