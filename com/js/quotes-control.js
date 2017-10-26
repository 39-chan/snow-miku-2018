/*  
	Copyright 2017 Shiro39
	
    This work is free and distributed without any warranty.
	You can redistribute it and/or modify it under the terms of the
	GNU Genereal Public License, Version 3.
*/

var r_text = new Array();

r_text[0] = "Would you like to order a cup of tea, or coffee, or... me?";
r_text[1] = "The only thing we have to fear is fear itself";
r_text[2] = "The highest form of love is to be the protector of another person's solitude";
r_text[3] = "Success is a lousy teacher. It seduces smart people into thinking they can't lose";
r_text[4] = "It's fine to celebrate success but it is more important to heed the lessons of failure";
r_text[5] = "If you can't make it good, at least make it look good";
r_text[6] = "Life is not fair; get used to it";
r_text[7] = "Don't cry because it's over, smile because it happened";
r_text[8] = "Be yourself; everyone else is already taken";
r_text[9] = "You only live once, but if you do it right, once is enough";
r_text[10] = "If you tell the truth, you don't have to remember anything";

var myRandom = Math.floor(Math.random()*r_text.length);

$(document).ready(function() {
	$('#r_text').html(r_text[myRandom]); 
});