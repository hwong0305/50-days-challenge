const joke = document.getElementById('joke');
const getJokeBtn = document.getElementById('fetch');

fetch('https://icanhazdadjoke.com', {
  headers: {
    accept: 'application/json',
  },
})
  .then(r => r.json())
  .then(data => {
    joke.innerText = data.joke;
  });

getJokeBtn.addEventListener('click', () => {
  fetch('https://icanhazdadjoke.com', {
    headers: {
      accept: 'application/json',
    },
  })
    .then(r => r.json())
    .then(data => {
      joke.innerText = data.joke;
    });
});
