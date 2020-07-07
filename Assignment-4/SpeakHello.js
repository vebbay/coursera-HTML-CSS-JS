(function(window) {
	var SpeakHello = new Object();
	var speakWord = "Hello";
	SpeakHello.speak = function(name) {
		console.log(speakWord + " " + name);
	};
	window.SpeakHello = SpeakHello;
})(window);