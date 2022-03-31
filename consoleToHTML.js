let version = "indev:0.3";
let author = "Donatien HOCHART";
let lastUpdate = "2022-03-29";

function displayElement(obj)
{
	let keys = Object.keys(obj);
	let resultStr="object : { ";
	for (let i = 0; i < keys.length; i++) {
		let val = obj[keys[i]];
	  	//console.log(val);
  		if (typeof val==="number" || typeof val==="string" || typeof val==="boolean")
		{
			resultStr+="<span class=\"objectKey\">"+keys[i]+"</span> : <span class=\"objectValue\">"+val+", </span>";
		} else if (typeof val==="null") {
			rresultStr+="<span class=\"objectKey\">"+keys[i]+"</span> : <span class=\"objectValue\">null, </span>";
		} else if (typeof val==="undefined") {
			resultStr+="<span class=\"objectKey\">"+keys[i]+"</span> : <span class=\"objectValue\">undefined, </span>";
		} else {
			resultStr+="<br><span class=\"objectKey\">"+keys[i]+"</span> : <span class=\"objectValue\">"+displayElement(val)+", </span><br>";
		}
	}
	return resultStr+" }";
}

let console={
	log: function(elt) {
		refConsoleDiv = document.getElementById("consoleDiv");
		if (typeof elt==="number" || typeof elt==="string" || typeof elt==="boolean")
		{
			refConsoleDiv.innerHTML+="<div class=\"consoleOut\">"+elt+"</div>";
		} else if (typeof elt==="null") {
			refConsoleDiv.innerHTML+="<div class=\"consoleOut nullReturn\">null</div>";
		} else if (typeof elt==="undefined") {
			refConsoleDiv.innerHTML+="<div class=\"consoleOut nullReturn\">undefined</div>";
		} else {
			refConsoleDiv.innerHTML+="<div class=\"consoleOut\">"+displayElement(elt)+"</div>";
		}
	}
}

let entryTab=[], entryPos=-1;

function promptConsole(e, ev)
{
	let entry;
	if(ev.code==="Enter") { //Entrée pour valider
		entryTab.push(e.value);
		entry=e.value
		entryPos++;
		e.value="";
		eval(entry);

	} else if (ev.code=="ArrowUp") { //Flèche du haut pour naviguer vers le haut dans l'historique
		if (entryPos>=0) {
			e.value=entryTab[entryPos];
			entryPos--;
		} else {
			console.log("No entry before");
		}
	} else if (ev.code=="ArrowDown") { //Flèche du bas pour naviguer vers le bas dans l'historique
		if (entryPos<entryTab.length) {
			e.value=entryTab[entryPos];
			entryPos++;
		} else {
			console.log("No entry after");
		}
	}
	/*else {
		console.log(ev.code);
	}*/


}

document.body.innerHTML="<h1>JS Console - VERSION TEST ("+version+")</h1>\n<div id=\"consoleDiv\"></div>\n<input type=\"text\" id=\"prompt\" name=\"prompt\" onkeydown=\"promptConsole(this, event);\">";


refPrompt = document.getElementById("prompt");
/*console.log(refPrompt)*/

