(function(window) {
	var SpeakGoodbye = new Object();
	var speakWord = "Good Bye";
	SpeakGoodbye.speak = function speak(name) {
		console.log(speakWord + " " + name);
	};
	window.SpeakGoodbye = SpeakGoodbye;
})(window);