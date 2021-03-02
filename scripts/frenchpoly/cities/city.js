export const city = (cityObj)=> {
    return `
    <article class ="city_card">
     <div><img class="city_card_image" src="images/frenchPoly_img/${cityObj.cityImage}" alt="French Polynesia City Image"></div>
        <div class="city_name"><h3>${cityObj.cityName}</h3></div>
        <div class="city_population">Population: ${cityObj.cityPopulation}</div>
        <div class="city_fact">${cityObj.cityFact}</div>
    </article>
    `;
}