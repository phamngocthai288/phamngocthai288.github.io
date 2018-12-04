var question1 = {
	question: "Faker là thành viên của team nào?",
	ans1: "Kingzone Dragonx",
	ans2: "SKT",
	ans3: "KT",
	result: "ans2"
};

var question2 = {
	question: "ai là người đi đường trên của SKT mùa giải mới 2019?",
	ans1: "Khan",
	ans2: "Huni",
	ans3: "Marin",
	result: "ans1"
};

var question3 = {
	question: "ai là thầy tu mù?",
	ans1: "Lee sin",
	ans2: "lee min ho",
	ans3: "lee lợi",
	result: "ans1"
};

var question4 = {
	question: "LOL là môn thể thao gì?",
	ans1: "Bóng chuyền",
	ans2: "Bóng rổ",
	ans3: "Thể thao điện tử",
	result: "ans3"
};

var question5 = {
	question: "ai là ngừoi chơi vị trí xạ thủ SKT?",
	ans1: "Bang",
	ans2: "wolf",
	ans3: "Peanut",
	result: "ans1"
};

var question6 = {
	question: "đi mid là đi đâu?",
	ans1: "đường giữa",
	ans2: "đi rừng",
	ans3: "k đi đâu cả",
	result: "ans1"
};

var question7 = {
	question: "ai được mệnh danh là quỷ vương?",
	ans1: "Levi",
	ans2: "Faker",
	ans3: "sofm",
	result: "ans2"
};

var question8 = {
	question: "rank xếp hạng cao nhất của lol là gì?",
	ans1: "Thách đấu",
	ans2: "Bạc rách",
	ans3: "Gỗ đoàn",
	result: "ans1"
};

var question9 = {
	question: "k sợ đối thủ mạnh chỉ sợ đồng độ.....?",
	ans1: "Ngu như bò",
	ans2: "gánh team",
	ans3: "đánh hay",
	result: "ans1"
};

var question10 = {
	question: "lên 1 rank thì phải đánh chuỗi mấy trận?",
	ans1: "5",
	ans2: "10",
	ans3: "15",
	result: "ans1"
};

var arrQues = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

var flag;
var score = 0;
var count = 1;
var lastScore = 0;
var numberClick = 0;
var max = 9;
var answer = document.querySelectorAll(".answer span");

function start() {
	window.location.href = "quiz.html";
}

function resetColor() {
	for (var i = 0; i < answer.length; i++) {
		answer[i].style.backgroundColor = "#cccccc";
	}
}

function changeColor(button) {
		resetColor();
		button.style.backgroundColor = "#f1ff92";
		flag = button.id;
}

function correctAns(dapAn) {
	if (dapAn == arrQues[count - 1].result) {
		score += 1;
	}
	return score;
}

function nextQuestion() {
	lastScore = correctAns(flag);
	resetColor();
	numberClick++;
	if (numberClick <= max) {
		document.getElementById("ques").innerHTML = arrQues[count].question;
		document.getElementById("ans1").innerHTML = arrQues[count].ans1;
		document.getElementById("ans2").innerHTML = arrQues[count].ans2;
		document.getElementById("ans3").innerHTML = arrQues[count].ans3;

		if(count == max)
			document.getElementById("next").innerHTML = "Kết quả";
		count++;
	} else {
		if (lastScore == arrQues.length) {
			window.location.href = "win.html";
		} else {
			window.location.href = "lose.html";
		}
	}
}

function backToStart() {
	window.location.href = "index.html";
}



