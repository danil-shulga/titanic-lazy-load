import { throttle } from './src/scripts/utils/throttle.js';
import { checkPosition } from './src/scripts/utils/checkPosition.js';
import { fetchPosts } from './src/scripts/Post/fetchPosts.js';
import { searchSubmit } from './src/scripts/Search/searchSubmit.js';
import { btnUp } from './src/assets/UI/btnUp.js';

const checkPositionThrottle = throttle(checkPosition, 200);
const fetchPostsOnScroll = () => checkPositionThrottle(fetchPosts)
window.addEventListener('scroll', fetchPostsOnScroll);
window.addEventListener('resize', fetchPostsOnScroll);

fetchPosts();

const form = document.querySelector('.searchForm');
form.addEventListener('submit', searchSubmit);

btnUp.addEventListener();
