// Start from your previous Spotify Exercise.
// The goal of this exercise is to fetch data from the API instead of having them "wired up" in the page.

// Generate automatically 3 lists based on the "search API" response

// es.: https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem
// es.: https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica
// es.: https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth
// Load them during page load, and create the collections based on the API response.
// Make the central part of the page scrollable both horizontally and vertically
// Add a "List albums" button. When pressed, he should create and display a list of albums on the page
// Add a "Count Unique" button. When pressed, he should log the number of unique albums on the page

window.onload = function () {
	fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem', {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'c7b363ca32msh5ca2aac7646b720p1ab3a8jsnc98e2304a331',
			'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
		},
	})
		.then((response) => response.json())

		.then((data) => {
			let list = document
				.createElement('ul')
				.appendChild(document.createElement('li'));

			//manipulating the DOM with data.......
			console.log('here is the data');
			console.log(data);
		})

		.catch((err) => {
			console.error(err);
		});

	fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth', {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'c7b363ca32msh5ca2aac7646b720p1ab3a8jsnc98e2304a331',
			'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
		},
	})
		.then((response) => response.json())
		.then((data) => {
			//manipulating the DOM with data.......
			console.log('here is the data');
			console.log(data);
		})
		.catch((err) => {
			console.error(err);
		});

	fetch('https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica', {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'c7b363ca32msh5ca2aac7646b720p1ab3a8jsnc98e2304a331',
			'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
		},
	})
		.then((response) => {
			response.json().then((data) => {
				//manipulating the DOM with data.......
				console.log('here is the data');
				console.log(data);
			});
		})
		.catch((err) => {
			console.error(err);
		});

	///////////////////////////////////////////////////////////////////////////Albums ///////////////////////////////////////////////////////

	fetch('https://deezerdevs-deezer.p.rapidapi.com/artist/12428974', {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'c7b363ca32msh5ca2aac7646b720p1ab3a8jsnc98e2304a331',
			'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
		},
	})
		.then((response) => {
			response.json().then((data) => {
				//manipulating the DOM with data.......
				console.log('here is the artist data');
				console.log(data);
			});
		})
		.catch((err) => {
			console.error(err);
		});

	fetch('https://deezerdevs-deezer.p.rapidapi.com/album/metallica', {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'c7b363ca32msh5ca2aac7646b720p1ab3a8jsnc98e2304a331',
			'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
		},
	})
		.then((response) => {
			response.json().then((data) => {
				//manipulating the DOM with data.......
				console.log('here is the data');
				console.log(data);
			});
		})
		.catch((err) => {
			console.error(err);
		});

	fetch('https://deezerdevs-deezer.p.rapidapi.com/album/behemoth', {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'c7b363ca32msh5ca2aac7646b720p1ab3a8jsnc98e2304a331',
			'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
		},
	})
		.then((response) => {
			response.json().then((data) => {
				//manipulating the DOM with data.......
				console.log('here is the data');
				console.log(data);
			});
		})
		.catch((err) => {
			console.error(err);
		});

	let btn = document.createElement('button');
	btn.innerText = 'List Albums';
	btn.onclick = function () {};
};
