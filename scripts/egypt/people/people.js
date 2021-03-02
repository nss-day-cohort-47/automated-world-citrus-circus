export const people = (peopleObj) => {
    return `
      <article class="people_card">
          <div><img class="people_card_image" src="images/egypt_img/${peopleObj.personImage}" alt="Egypt Celebrity Image"></div>
          <div class="people_name"><h3>${peopleObj.personName}</h3></div>
          <div class="famous_for">Famous for: ${peopleObj.famousFor}</div>
          <div class="alive_today">Are they alive: ${peopleObj.aliveToday === true ? "Yes" : "No"}</div>
      </article>
      `;
  };
  