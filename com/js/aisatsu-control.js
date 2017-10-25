// Get local time and print greets based on the current time

var aisatsu;

if(new Date().getHours() <= 10) 
{
	aisatsu = "Good morning"; // おはようございます
}
else if(new Date().getHours() <= 16)
{
	aisatsu = "Good afternoon"; // こんにちは
}
else if(new Date().getHours() <= 22)
{
	aisatsu = "Good evening"; // こんばんは
}
else
{
	aisatsu = "Good night"; // おやすみなさい
}

document.write('<h1 style="cursor: default;">' + aisatsu + ', <span class="name-highlight" style="cursor: pointer;" onclick="Miku_Master()">Master~ ♥</span></h1>');

// Click on the "Master~ ♥" to hear Miku saying "Master"

function Miku_Master()
{
	document.getElementById('master').play();
}