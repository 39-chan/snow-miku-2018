// Get local time and print greets based on the current time

var aisatsu;

if(new Date().getHours() <= 10) 
{
	aisatsu = "おはようございます";
}
else if(new Date().getHours() <= 16)
{
	aisatsu = "こんにちは";
}
else if(new Date().getHours() <= 22)
{
	aisatsu = "こんばんは";
}
else
{
	aisatsu = "おやすみなさい";
}

document.write('<h1 style="font-size: 40px"; cursor: default;">' + aisatsu + ', <span class="name-highlight" style="cursor: pointer;" onclick="Miku_Master()">マースター～ ♥</span></h1>');

function Miku_Master()
{
	document.getElementById('master').play();
}