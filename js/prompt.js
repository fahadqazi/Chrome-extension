var username = prompt("What is your name?");
document.body.innerHTML = "<h1> Hello " + username + "! </h1>" +
							'<p>' + kbValues.projectName + ' ' + kbValues.versionNumber + 
							' accessed on: ' + kbValues.currentTime + '</p>';