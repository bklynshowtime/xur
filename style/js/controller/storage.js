class Storage {

	init() {

	}

	locations(data) {
		localStorage.setItem('locations', JSON.stringify(data));
	}

}