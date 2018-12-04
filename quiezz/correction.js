function MakeQuestion(x,a,b,c,d,correct)
{
	this.cauhoi=x;
	this.dapanA=a;
	this.dapanB=b;
	this.dapanC=c;
	this.dapanD=d;
	this.correct=correct;
}

function gan(i)
{
document.getElementById("tieude").innerHTML=q[i].cauhoi;
document.getElementById("btn0").innerText=q[i].dapanA;
document.getElementById("btn1").innerText=q[i].dapanB;
document.getElementById("btn2").innerText=q[i].dapanC;
document.getElementById("btn3").innerText=q[i].dapanD;
}
var q=[]
	q[0]= new MakeQuestion("Who wins the Fifa Ballon d'or 2015","Lionel Messi","Cristiano Ronaldo","Cong Vinh","Mac Hong Quan","Lionel Messi");
	q[1]= new MakeQuestion("Who is the current President of The United States ","Barrack Obama","Bruce Wayne","Steve Jobs","Donald j. Trump","Donald j. Trump");
	q[2]= new MakeQuestion("Who is the winner of FIFA World Cup 2014","Argentina","Germany","Vietman","England","Germany");
	q[3]= new MakeQuestion("Who is the richest person in the World","Chuck Norris","Pham Nhat Vuong","Bill Gate","Warren Buffet","Bill Gate");
	q[4]= new MakeQuestion("What is the most popular Search Engine in the World","Bing","Google","Ask","Baidu","Google");

for (var j=0;j<5;j++)
{
	document.getElementById("correction").innerText+=(j+1)+'. '+q[j].correct+'\n';
}