import { createPost } from './createPost.js';

const passengersList = document.querySelector('.passengerList');

function appendPost(postData) {
  if (!postData) return;
  passengersList.append(createPost(postData));
}

export { appendPost, passengersList };
