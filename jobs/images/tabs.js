// Search JavaScript code - LH 2002
// init function

function handleError() {return true;}
window.onerror = handleError;

function init() {

	if (document.getElementById){
		// set the right cursor style for IE and DOM compliant browsers
		if (document.all){ // IE detect, could break later on
			for (i = 1; i <= tabnum; i++) {eval(document.getElementById('tab'+ eval(i))).style.cursor = 'hand';}
		} else { // CSS2 compliant browsers (that implement cursor)
			for (i = 1; i <= tabnum; i++) {eval(document.getElementById('tab'+ eval(i))).style.cursor = 'pointer';}
		}
	}

	// for browsers that use captureEvents rather than onClick on the tab <table>
	if (document.captureEvents) {
		document.onmouseup = mouseclick;
		document.captureEvents(Event.MOUSEUP);
	}
}

// checks a mouse event co-ordinate to see if it is in a tab 
function mouseclick(e) {
	if (e.which!=1) return true;
	var x = e.pageX;
	var y = e.pageY;
	chkevent(x,y);
	return true;
}

// derives the x,y of an image
function getcoor(imgID, axis){ return eval(imgID).eval(axis); }

// returns an array of the co-ordinates of the two images
function tabarea (topImg, botImg){
	var tx = getcoor(topImg, "x");
	var ty = getcoor(topImg, "y");
	var bx = getcoor(botImg, "x") + eval(botImg).width; 
	var by = getcoor(botImg, "y") + eval(botImg).height;
	var ta = new Array(tx,ty,bx,by);
	return ta;
}

// checks the mouse event and compares x,y to a tab area.
function chkevent(x,y) {
	for (i = 1; i <= tabnum; i++) {
		var tab = tabarea(eval(document.images['ul' + eval(i)]),eval(document.images['lr' + eval(i)]));
		cmp(x,y,tab,i);
	}
	return true;
}

// compare function for chkevent
function cmp(x,y,tabarea,i) {
	if ((x >= tabarea[0] && x <= tabarea[2]) && (y >= tabarea[1] && y <= tabarea[3])) { urlcheck(eval('t' + eval(i) + 'url'));}
}

// check the current value in the search boxes and modify the url for the tabs accordingly
function urlcheck(url) {
	var term = te(document.topform.q.value);
		if (term != ist && term != null) {
			self.location = diceurl(url,term);
		} else {
			self.location = url;
		}
	return true;
}

//encode a searchterm 
function te(s) { s = escape(s); return(s);}

// takes a url and search term and creates a new search url
function diceurl(url, term) {

	if (url.indexOf('?q=') != -1) {	
		hi = url.indexOf('?q=') + 3; 
		} else if (url.indexOf('&q=') != -1) {
		hi = url.indexOf('&q=') + 3; 
	} else {
		return url;
	}

	ti = url.indexOf('&', hi);
	head = url.slice(0, hi);
	tail = url.slice(ti);
	rurl = head + term + tail;
	return rurl;
}



