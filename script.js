const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://open-weather13.p.rapidapi.com/city/Delhi/EN');
xhr.setRequestHeader('x-rapidapi-key', 'ea6a8e6f8cmsh23b33fb9f979b91p1dac59jsnbda3f48cd49e');
xhr.setRequestHeader('x-rapidapi-host', 'open-weather13.p.rapidapi.com');

xhr.send(data);