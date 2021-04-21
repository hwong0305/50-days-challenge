const cardBody = document.querySelector('.card-body');

fetch('https://randomuser.me/api?results=50')
  .then(r => r.json())
  .then(data => {
    const { results } = data;

    console.log(results);

    results.forEach(result => {
      const div = document.createElement('div');
      div.innerHTML = `<h1>${result.name.first} ${result.name.last}</h1><p>${result.location.city}, ${result.location.country}</p>`;

      cardBody.appendChild(div);
    });
  });
