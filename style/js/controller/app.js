class App {
	
	init() {
		this.appInterval();
		this.buildTemplate();
		this.buildLocations();
		this.buildTimer();
		this.resizeTemplate();
		this.moveXur();
	}

	appInterval() {
		var app = new App;
	    setInterval(function() {
	    	app.buildTimer();
	    	app.moveXur();
	    }, 1e3);
	}

	buildTemplate() {
		var template, content;
		template = jQuery('.xur-app');
		content = 	`<div class="xur-template">
						<div class="xur-banner">
							<div class="xur-banner-image xur-25">
								<div class="xur-banner-title"></div>
							</div>
						</div>
						<div class="xur-timer">Timer</div>
						<div class="xur-locations xur-wrapper"></div>
					</div>`;
		template.html(content);
	}

	buildTimer() {
		var data = JSON.parse(localStorage.locations);
		var time;
		for (var i = 0; i < Object.keys(data).length; i++) {
			launch = moment(data[i].time);
	        today = moment().format();
	        seconds = (launch.diff(today, 'seconds'));
	        if(seconds > 0 && data[i].available === true) {
	        	time = data[i].time;
	        }
		}
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
        launch = moment(time);
        today = moment().format();
        days = launch.diff(today,'days');
        hours = launch.diff(today,'hours');
        if(hours<24){hours=hours;}
        else {hours=hours-24;}
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

	timerTemplate() {

	}

	buildLocations() {
		var storage = new Storage(), app = new App();
		jQuery.getJSON("/data/locations.json", function(json) {
            if(Object.keys(json).length < 1) {
                console.log('empty');
            }
            else {
                storage.locations(json);
                app.loadLocations(json);
            }
        });
	}

	loadLocations(json) {
		for (var i = 0; i < Object.keys(json).length; i++) {
			var data, content;
			data = json[i];
			var loot = (data.available ? this.loadLoot(data,i) : '<div class="xur-location-unknown">unknown</div>');
			var available = (data.available ? 'available' : 'not-available');
			content = 	`<div class="xur-location">
							<div class="xur-location-block `+available+`">
								<div class="xur-location-loot xur-wrapper">`+loot+`</div>
								<div class="xur-location-time">`+moment(data.time).format("MMM Do YYYY")+`</div>
							</div>
						</div>`;
			jQuery('.xur-locations').append(content);
			this.buildCarousel();
		}
	}

	loadLoot(data,num) {
		var content;
		content = 	`<div class="loot-carousel owl-carousel owl-theme">
					    <div class="item">
					    	<img src="http://via.placeholder.com/1920x1080" width="100%">
					    </div>
					    <div class="item">
					    	<img src="http://via.placeholder.com/1920x1080" width="100%">
					    </div>
					    <div class="item">
					    	<img src="http://via.placeholder.com/1920x1080" width="100%">
					    </div>
					    <div class="item">
					    	<img src="http://via.placeholder.com/1920x1080" width="100%">
					    </div>
					    <div class="item">
					    	<img src="http://via.placeholder.com/1920x1080" width="100%">
					    </div>
					</div>`;
		return content;
	}

	buildCarousel() {
		jQuery('.loot-carousel').owlCarousel({
		    loop: true,
		    margin: 0,
		    nav: false,
		    responsive:{
		        0:{ items: 1 }
		    }
		});
	}

	resizeTemplate() {
		jQuery(window).resize(function() {
			var loot, lootHeight;
			loot = jQuery('.loot-carousel');
			lootHeight = loot.height();
			jQuery('.xur-location-block.not-available').css({'min-height':lootHeight+'px'});
		});
	}

	moveXur() {
		var randX, randY;
		randX = Math.floor(Math.random() * -25) + 1;
		randY = Math.floor(Math.random() * -25) + 1;
		jQuery('.xur-banner-image').css({'background-position-x':'calc(50% - '+randX+'px)','background-position-y':'calc(50% - '+randY+'px)'});
	}

}