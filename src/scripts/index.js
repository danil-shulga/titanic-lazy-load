import { throttle } from './utils/throttle.js';
import { checkPosition } from './utils/checkPosition.js';
import { fetchPosts } from './Post/fetchPosts.js';
import { searchSubmit } from './Search/searchSubmit.js';

const checkPositionThrottle = throttle(checkPosition, 200);
window.addEventListener('scroll', () => checkPositionThrottle(fetchPosts));
window.addEventListener('resize', () => checkPositionThrottle(fetchPosts));

fetchPosts();

const form = document.querySelector('.searchForm');
form.addEventListener('submit', searchSubmit);