function renderData(countries){
	const mainContentContainer = document.querySelector('.main-content-container');

	countries.forEach((country)=>{

		let newCountry = country.data();

		const countryContainer = document.createElement('span');
		const flagContainer = document.createElement('span');
		const flagImage = document.createElement('img');
		const countryName = document.createElement('h3');
		const countryRegion = document.createElement('h3');
		const countryPopulation = document.createElement('h3');

		mainContentContainer.append(countryContainer);
		countryContainer.append(flagContainer, countryName, countryRegion, countryPopulation);
		flagContainer.append(flagImage);

		flagImage.src = newCountry.flag;
		countryName.textConent = newCountry.countryName;
		countryRegion.textContent = newCountry.region;
		countryPopulation.textContent = newCountry.population;

	});
}

export default renderData 