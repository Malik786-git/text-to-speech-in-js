let speech = new SpeechSynthesisUtterance();
speech.text= 'hello world';
speech.pitch = 1;
speech.volume = 1;
speech.lang = 'en-US';
speech.rate= 1;
speechSynthesis.speak(speech);
