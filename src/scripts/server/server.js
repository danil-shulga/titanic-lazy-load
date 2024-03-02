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
  filteredData: data,

  setFilter(str) {
    if (str === 'male') str = ' male' // "чуть-чуть" костыль который отсекает 'female' но и все имена с 'male' )))
    this.filter = str;
  },

  posts(page = 1) {
    if (!(this.filter === '')) {
      this.filteredData = data.filter((passenger) => {
        const searchField = createSearchField(passenger);
        return searchField.toLowerCase().includes(this.filter.toLowerCase());
      });
    } else {
      this.filteredData = data;
    }

    const finished = page >= this.filteredData.length / this.chunkSize;
    const next = finished ? null : page + 1;
    const posts = getDataChunk(this.filteredData, page, this.chunkSize);

    return new Promise((resolve) => {
      // имитация ответа сервера
      setTimeout(() => {
        resolve({ posts, next });
      }, 100);
    });
  },
};

export { server };
