var projectName = "kittenbook";
var versionNumber = "0.0.1";
var currentDate = new Date();
var currentTime = currentDate.getFullYear() + '_' +
 currentDate.getMonth() + '-' +
  currentDate.getDate() + " at " +
   currentDate.getHours() + ":" +
    currentDate.getMinutes() + ":" +
     currentDate.getSeconds();


kbValues ={
	projectName: 'kittenbook',
	versionNumber: '0.0.1',
	currentTime: new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate() + " at " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()
};
var username = prompt("What is your name?");
document.body.innerHTML = "<h1> Hello " + username + "! </h1>" +
							'<p>' + kbValues.projectName + ' ' + kbValues.versionNumber + 
							' accessed on: ' + kbValues.currentTime + '</p>';