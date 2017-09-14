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
						<div class="xur-banner"></div>
						<div class="xur-timer">Timer</div>
						<div class="xur-locations">Locations</div>
					</div>`;
		template.html(content);
	}

	buildTimer() {
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
        var launch = moment('2017-09-15T00:00:00');
        var today = moment().format();
        var days = (launch.diff(today, 'days'));
        var hours = (launch.diff(today, 'hours')) - 24;
        var minutes = (launch.diff(today, 'minutes'));
        var seconds = (launch.diff(today, 'seconds'));
		var timer, content, current, start, minutes, hours, day, days, weeks;
		var nm;
		nm = Math.round( ((launch.diff(today, 'hours') - minutes/60) * 60), 2);
		if(days <= 1){day='day'}else{day='days'}
		timer = jQuery('.xur-timer');
		content = 	`<div class="xur-timer-message xur-wrapper">
						<div class="xur-timer-item xur-timer-day">
							<div class="xur-timer-value">`+days+`</div>
							<div class="xur-timer-title">`+day+`</div>
						</div>
						<div class="xur-timer-item xur-timer-hour">
							<div class="xur-timer-value">`+hours+`</div>
							<div class="xur-timer-title">hours</div>
						</div>
						<div class="xur-timer-item xur-timer-minutes">
							<div class="xur-timer-value">`+(nm * -1)+`</div>
							<div class="xur-timer-title">minutes</div>
						</div>
						<div class="xur-timer-item xur-timer-seconds">
							<div class="xur-timer-value">`+(60-u)+`</div>
							<div class="xur-timer-title">seconds</div>
						</div>
					</div>`;
		timer.html(content);
	}

	buildLocations() {
		console.log('cool');
	}

}