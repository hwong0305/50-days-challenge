import Fuse from 'fuse.js';
const cardBody = document.querySelector('.card-body');
const search = document.getElementById('search');

let people;
let fuse;

fetch('https://randomuser.me/api?results=50')
  .then(r => r.json())
  .then(data => {
    people = data.results;
    fuse = new Fuse(people, options);

    people.forEach(result => {
      const div = document.createElement('div');
      div.innerHTML = `<img src="${result.picture.thumbnail}" /><div><h1>${result.name.first} ${result.name.last}</h1><p>${result.location.city}, ${result.location.country}</p></div>`;
      div.className = 'member';

      cardBody.appendChild(div);
    });
  });

const options = {
  threshold: 0.3,
  keys: ['name.first', 'name.last'],
};

search.addEventListener('keydown', e => {
  console.log('changing');
  cardBody.innerHTML = '';
  if (!e.target.value) {
    people.forEach(result => {
      const div = document.createElement('div');
      div.innerHTML = `<img src="${result.picture.thumbnail}" /><div><h1>${result.name.first} ${result.name.last}</h1><p>${result.location.city}, ${result.location.country}</p></div>`;
      div.className = 'member';

      cardBody.appendChild(div);
    });
  } else {
    const results = fuse.search(e.target.value);

    results.forEach(({ item: result }) => {
      const div = document.createElement('div');
      div.innerHTML = `<img src="${result.picture.thumbnail}" /><div><h1>${result.name.first} ${result.name.last}</h1><p>${result.location.city}, ${result.location.country}</p></div>`;
      div.className = 'member';

      cardBody.appendChild(div);
    });
  }
});
