 let searchForm = document.getElementById('search-form');
const citySearch = document.getElementById('input');
const place = document.getElementById('place');
const cardBody = document.getElementById('display-grid');

searchForm.addEventListener("submit", (event)=>{
	event.preventDefault();

	updateWeather=(city)=>{
		console.log(city);
		place.textContent = city.name;
		cardBody.innerHTML = `

				<div>
					<p><span>${city.main.temp}&deg;F</span></p>
				</div>
				<div id="info">
					<p id="condition"><i class='fas fa-smog'>&nbsp</i>${city.weather[0].main}</p>
					<p id="condition"><i class='fas fa-map-marker-alt'>&nbsp</i>${city.sys.country}</p>
				</div>
		`
	}

	 searchForm.addEventListener('submit', (e)=>{
	 	e.preventDefault();
	 	const citySearched = citySearch.value.trim();
	 	searchForm.reset();

	 	requestCity(citySearched)
	 	.then((data)=>{
	 		updateWeather(data);
	 	})
	 	.catch((error)=>{
	 		console.log(error)
	 	})
	 })
});
