//Example fetch using pokemonapi.co
getFetch();
document.querySelector('button').addEventListener('click', getFetch);

function getFetch(){
	const url = 'https://api.aniapi.com/v1/anime';

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			console.log(data);
			let randAnime = Math.ceil(Math.random() * 100) - 1;
			let animeObject = data.data.documents[randAnime];
			document.querySelector('h2').innerText = animeObject.titles.en;
			document.querySelector('h3').innerHTML = animeObject.descriptions.en;
			document.querySelector('.img1').src = animeObject['cover_image'];
			document.querySelector('body').style.backgroundImage =
				'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))' + ',' + `url(${animeObject['banner_image']})`;
			document.querySelector('.img1').style.border = '5px solid rgba(133, 13, 13, 0.729)';
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}
