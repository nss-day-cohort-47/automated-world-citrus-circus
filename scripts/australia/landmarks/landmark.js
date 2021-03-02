export const landmark = (landmarkObj) => {
    return `
      <article class="city_card">
          <div><img class="city_card_image" src="images/australia_img/${landmarkObj.cityImage}" alt="Australia City Image"></div>
          <div class="city_name"><h3>${landmarkObj.cityName}</h3></div>
          <div class="city_population">Population: ${landmarkObj.cityPopulation}</div>
          <div class="city_fact">${landmarkObj.cityFact}</div>
      </article>
      `;
  };