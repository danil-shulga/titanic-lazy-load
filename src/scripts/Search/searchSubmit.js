import { passengersList } from '../Post/appendPost.js';
import { fetchPosts } from '../Post/fetchPosts.js';
import { server } from '../server/server.js';

function searchSubmit(e) {
  e.preventDefault();
  const searchFormInput = e.target.querySelector('.searchForm_input');
  server.setFilter(searchFormInput.value);
  passengersList.innerHTML = '';
  fetchPosts(true);
}

export { searchSubmit };
