let ts = (function(document, window, logger){
	var FIRST = 0;
	var LAST = -1;
	var STATE = {
		TYPE: 0,
		CLEAR: 1
	};
	function processItem(el, index, cfg){
		var currentStringIndex = FIRST;
		var state = STATE.TYPE;
		if( el.classList.contains('ts-runing') ){
			logger.error('[ERR] (TS) Item already initialized.');
			return false;
		}
		el.classList.add('ts-runing');
		var timer = window.setInterval(function(){

			if( state === STATE.TYPE ){
				el.textContent += cfg.strings[currentStringIndex][el.textContent.length];
			} else {
				el.textContent = el.textContent
					.split('')
					.slice(0, el.textContent.length-1)
					.join('');
			}

			if( state === STATE.CLEAR ){
				if( el.textContent.length === 0 ){
					currentStringIndex++;
					state = STATE.TYPE;
				} else {
					return;
				}
			}

			if( el.textContent.length === cfg.strings[currentStringIndex].length ){
				if( cfg.strings.length > currentStringIndex+1 ){
					state = STATE.CLEAR;
				} else if( cfg.endless || false ) {
					state = STATE.CLEAR;
					currentStringIndex = FIRST-1;
				} else {
					el.classList.remove('ts-runing');
					el.classList.add('ts-finish');
					window.clearInterval(timer);
				}
			}

		}, cfg.duration);
	}
	return {
		run: function(cfg){
			var elements = document.querySelectorAll(cfg.selector || 'body');
			if( ! cfg.strings ){
				cfg.strings = [cfg.text];
			}
			for(var i = 0; i < elements.length; ++i){
				var el = elements[i];
				processItem(el, i, cfg);
			}
		}
	};
})(document, window, console);
