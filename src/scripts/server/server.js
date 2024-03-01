import { getDataChunk } from './getDataChunk.js';
import { createSearchField } from '../Search/createSearchField.js';

const data = await fetch(
  'https://raw.githubusercontent.com/altkraft/for-applicants/master/frontend/titanic/passengers.json'
)
  .then((res) => res.json())
  .then((res) => res);

const server = {
  filter: '',
  chunkSize: 20,

  setFilter(str) {
    this.filter = str;
  },

  posts(page = 1) {
    let filteredData = data.filter((passenger) => {
      if (this.filter === '') return passenger;

      const searchField = createSearchField(passenger);
      return searchField.toLowerCase().includes(this.filter.toLowerCase());
    });

    console.log(filteredData);

    const finished = page >= filteredData.length / this.chunkSize;
    const next = finished ? null : page + 1;
    const posts = getDataChunk(filteredData, page, this.chunkSize);

    return new Promise((resolve) => {
      // имитация ответа сервера
      setTimeout(() => {
        resolve({ posts, next });
      }, 100);
    });
  },
};

export { server };
