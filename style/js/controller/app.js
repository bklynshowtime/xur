class App {
	
	init() {
		this.appInterval();
		this.buildTemplate();
		this.buildTimer();
		this.buildLocations();
	}

	appInterval() {
		var app = new App;
	    setInterval(function() {
	    	app.buildTimer();
	    }, 1e3);
	}

	buildTemplate() {
		var template, content;
		template = jQuery('.xur-app');
		content = 	`<div class="xur-template">
						<div class="xur-banner" id="top-image">
							<div class="xur-banner-title"></div>
						</div>
						<div class="xur-timer">Timer</div>
						<div class="xur-locations xur-wrapper"></div>
					</div>`;
		template.html(content);
	}

	buildTimer() {
		var timer, content, launch, today, days, day, hours, hour, minutes, minute, nm, seconds, second;
		var t = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"),
            e = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"),
            n = new Date,
            i = n.getYear();
        1e3 > i && (i += 1900);
        var a = n.getDay(),
            o = n.getMonth(),
            s = n.getDate();
        10 > s && (s = "0" + s);
        var h = n.getHours(),
            c = n.getMinutes(),
            u = n.getSeconds(),
            l = "AM";
        h >= 12 && (l = "PM"), h > 12 && (h -= 12), 0 == h && (h = 12), 9 >= c && (c = "0" + c), 9 >= u && (u = "0" + u), $(".mhn-ui-date-time .mhn-ui-day").text(t[a]), $(".mhn-ui-date-time .mhn-ui-date").text(e[o] + " " + s + ", " + i), $(".mhn-ui-date-time .mhn-ui-time").text(h + ":" + c + ":" + u + " " + l), $(".mhn-ui-app-time").text(h + ":" + c + ":" + u + " " + l)
        launch = moment('2017-09-14T23:59:59');
        today = moment().format();
        days = (launch.diff(today, 'days'));
        hours = (launch.diff(today, 'hours')) - 24;
        minutes = (launch.diff(today, 'minutes'));
        seconds = (launch.diff(today, 'seconds'));
		nm = Math.round( ((launch.diff(today, 'hours') - minutes/60) * 60), 2);
		if(days === 1){day='day'}else{day='days'}
		if(hours === 1){hour='hour'}else{hour='hours'}
		if(nm * -1 === 1){minute='minute'}else{minute='minutes'}
		if((59-u) === 1){second='second'}else{second='seconds'}
		timer = jQuery('.xur-timer');
		content = 	`<div class="xur-timer-message xur-wrapper">
						<div class="xur-timer-item xur-timer-day">
							<div class="xur-timer-value">`+days+`</div>
							<div class="xur-timer-title">`+day+`</div>
						</div>
						<div class="xur-timer-item xur-timer-hour">
							<div class="xur-timer-value">`+hours+`</div>
							<div class="xur-timer-title">`+hour+`</div>
						</div>
						<div class="xur-timer-item xur-timer-minutes">
							<div class="xur-timer-value">`+(nm * -1)+`</div>
							<div class="xur-timer-title">`+minute+`</div>
						</div>
						<div class="xur-timer-item xur-timer-seconds">
							<div class="xur-timer-value">`+(59-u)+`</div>
							<div class="xur-timer-title">`+second+`</div>
						</div>
					</div>`;
		timer.html(content);
	}

	buildLocations() {
		for (var i = 1; i <= 9; i++) {
			jQuery('.xur-locations').append('<div class="xur-location"><div class="xur-location-block">'+i+'</div></div>');
		}
	}

}