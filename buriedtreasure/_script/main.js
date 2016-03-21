
var floSpeech = new Array();

floSpeech[0] = "If you make a find of treasure, you must report it by law. You could get to keep it (legally), or receive its full market value!";

floSpeech[1] = "Find out more about how to report your finds and get involved in archaeology by contacting the <a href=\"http://www.finds.org.uk/\" target=\"_blank\">Portable Antiquities Scheme</a>.";

//floSpeech[2] = "In the early 19th century, a ghostly figure used to offer passers-by a drink from a golden cup on Bodmin Moor - was it just coincidence that a golden cup was subsequently found there at Rillaton in 1837?";

floSpeech[2] = "An electrician found a hoard of 17th century coins in a loft in 1994 - it's amazing what can be found in the attic!";

//floSpeech[4] = "Mr Carlile kept everything he found whilst metal detecting - and amassed a staggering 11,000 metal objects over the course of 20 years. They all now belong to <a href=\"http://www.northlincs.gov.uk/NorthLincs/Leisure/museums/NorthLincolnshireMuseum.htm\" target=\"_blank\">North Lincolnshire Museum</a>.";

floSpeech[3] = "Divers sometimes find things from shipwrecks, and these have to be reported, just like treasure, to the <a href=\"http://www.mcga.gov.uk/c4mca/mcga-dops_environmental/mcga-dops_row_receiver_of_wreck.htm\" target=\"_blank\">Receiver of Wreck</a>.";

//floSpeech[4] = "The seventh century Holderness Cross was spotted by a farmer 30 years ago in a field where he kept pigs! One of them probably disturbed it whilst it was grubbing around for food.";

floSpeech[4] = "The Romans thought Amethyst protected from drunkenness.";


var dom = (document.getElementById) ? true:false;

var i = new Array();

function init()
{
	if (dom)
	{
		i[0] = new Image(); i[0].src="/buriedtreasure/_graphic/nav/welcome1.gif";
		i[1] = new Image(); i[1].src="/buriedtreasure/_graphic/nav/booktickets1.gif";
		i[2] = new Image(); i[2].src="/buriedtreasure/_graphic/nav/treasureshop1.gif";
		i[3] = new Image(); i[3].src="/buriedtreasure/_graphic/nav/treasurechest1.gif";
		i[4] = new Image(); i[4].src="/buriedtreasure/_graphic/nav/treasurehunt1.gif";
		i[5] = new Image(); i[5].src="/buriedtreasure/_graphic/nav/treasuregame1.gif";
		i[6] = new Image(); i[6].src="/buriedtreasure/_graphic/nav/compasstours1.gif";
	
		setInterval('anim()',10000);
	}
}

function rollOn(obj,which)
{
	if (dom) obj.setAttribute("src","/buriedtreasure/_graphic/nav/"+which+"1.gif");
}

function rollOff(obj,which)
{
	if (dom) obj.setAttribute("src","/buriedtreasure/_graphic/nav/"+which+"0.gif");
}

var floCurrent = Math.floor(floSpeech.length * Math.random());
var floVisible = false;
function anim()
{
	if (floVisible)
	{
		floCurrent = (floCurrent+1) % floSpeech.length;
		document.getElementById('speechBubble').style.visibility = 'hidden';
		floVisible = false;
	}
	else
	{
		document.getElementById('speechBubble').innerHTML = "<p>"+floSpeech[floCurrent]+"</p>";
		document.getElementById('speechBubble').style.visibility = 'visible';
		floVisible = true;
	}
}



function sendData(){
	var args ="?";
	action_type = (document.subbox.action_type[1].checked) ? "unsubscribe" : "subscribe";
	    if (action_type == "unsubscribe") {
	        args = args + "action=remoteBox&errorPage=/public/remotebox_error.jsp&gid=40005330&action_type=unsubscribe"
        	args = args + "&";
	        args =args + "uemail=";
	        args =args + document.subbox.uemail.value;
	    }  else {
	        args = args + "action=register&errorPage=/public/remotebox_error.jsp&gid=40005330&iso_lang=en&iso_country=EN&agb=1&mps=4jcmf60aq60rfmudtzq7c&action_type=subscribe"
	        args = args + "&";
	        args =args + "uemail=";
	        args =args + document.subbox.uemail.value;
	    }
        mywin =window.open("http://britishmuseum.ecircle-ag.com/public/remotebox_welcome.jsp"+args,"mywin","tolbar=no,scrollbars=no,menubar=no,width=400,height=250");
        mywin.focus();
        return false;
}


function openTic(URL,winName) {
	window.open(URL,winName,"width=800,height=600,status=no,toolbar=no,menubar=no,scrollbars=yes,resizable=yes");
}