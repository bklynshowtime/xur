class adBlock {

	init() {
		var test = document.createElement('div');
		test.innerHTML = '&nbsp;';
		test.className = 'adsbox';
		jQuery('.xur-detect').append(test);
		window.setTimeout(function() {
			if (test.offsetHeight === 0) {
				jQuery('body').addClass('adblock');
				jQuery('.xur-detect').html('<div class="xur-detect-title">Turn AdBlock off to view this site...</div>')
				console.log('run message');
			}
			else {
				jQuery('.xur-detect').remove();
				console.log('run app');
				app.init();
			}
		}, 15);
	}

}