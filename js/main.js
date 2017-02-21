// addEventListening on Main Menu Gray Color

document.addEventListener("DOMContentLoaded", function(event) {

	var menuNavbar = document.getElementsByClassName("grayColor");

	for (var i = 0; i < menuNavbar.length; i++) {
		menuNavbar[i].addEventListener ("click", clickMenu);
	}

	function clickMenu (event) {
		for (var i = 0; i < menuNavbar.length; i++) {
			menuNavbar[i].classList.remove("selected");
		}
		event.currentTarget.classList.add("selected");
	}

});

// When Click on Learn More Button open o new file
document.addEventListener("DOMContentLoaded", function(event) {
	var learnMore = document.getElementsByClassName("bgdNone");
	
	for (var i = 0; i < learnMore.length; i++) {	
		learnMore[i].addEventListener("click", clickLearn);
	}
	function clickLearn(event) {
		window.open("http://eune.leagueoflegends.com/en/page/blood-moon-rising");
	}

});

// addEventListening on greenRow buttons of footerContainer
document.addEventListener("DOMContentLoaded", function(event){

	var footerBtn = document.getElementsByClassName("greenRow");
	for(var i = 0; i < footerBtn.length; i++) {
		footerBtn[i].addEventListener("click", function (event) {
			for(var i = 0; i < footerBtn.length; i++) {
			footerBtn[i].classList.remove("select");
			}
			event.currentTarget.classList.add("select");
		});
	}	
});