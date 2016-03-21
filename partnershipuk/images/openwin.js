function openWindow(file){

var xpos = parseInt((screen.width/2)- 200);
var ypos = parseInt((screen.height/2)- 125); 

var newWindow = window.open(file,'','width=400,height=325,titlebar=no,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no'); 

newWindow.focus();
newWindow.moveTo(xpos,ypos); 
} 

