import { floor10 } from "../utils/floor10.js";
import { getLifeStatus } from "../utils/getLifeStatus.js";

const passengerTemplate = document.getElementById('passengerTemplate');

function createPost(postData) {
  if (!postData) return

  const { name, survived, gender, age, ticket, id } = postData
  const passenger = passengerTemplate.content.cloneNode(true);

  passenger.querySelector('.passenger_name').innerText = name;
  // passenger.querySelector('.passenger_id').innerText = id;
  passenger.querySelector('.passenger_survived').innerText = getLifeStatus(survived);
  passenger.querySelector('.passenger_gender').innerText = gender;
  passenger.querySelector('.passenger_age').innerText = `age: ${floor10(age)}`;
  passenger.querySelector('.passenger_ticket').innerText = `ticket: ${ticket}`;

  return passenger;
}

export { createPost }