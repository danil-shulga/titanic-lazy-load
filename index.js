import { throttle } from './src/scripts/utils/throttle.js';
import { checkPosition } from './src/scripts/utils/checkPosition.js';
import { fetchPosts } from './src/scripts/Post/fetchPosts.js';
import { searchSubmit } from './src/scripts/Search/searchSubmit.js';

const checkPositionThrottle = throttle(checkPosition, 200);
window.addEventListener('scroll', () => checkPositionThrottle(fetchPosts));
window.addEventListener('resize', () => checkPositionThrottle(fetchPosts));

fetchPosts();

const form = document.querySelector('.searchForm');
form.addEventListener('submit', searchSubmit);