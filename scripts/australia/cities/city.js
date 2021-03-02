export const city = (cityObj) => {
    return `
      <article class="city_card">
          <div><img class="city_card_image" src="images/australia_img/${cityObj.cityImage}" alt="Australia City Image"></div>
          <div class="city_name"><h3>${cityObj.cityName}</h3></div>
          <div class="city_population">Population: ${cityObj.cityPopulation}</div>
          <div class="city_fact">${cityObj.cityFact}</div>
      </article>
      `;
  };