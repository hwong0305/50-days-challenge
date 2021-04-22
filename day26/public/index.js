const text = [
  {
    title: 'Flying eagle',
    subtitle: 'in the sunset',
    background: '#ffb866',
  },
  {
    title: 'Lonely castle',
    subtitle: 'in the wilderness',
    background: '#252e33',
  },
  {
    title: 'Bluuue Sky',
    subtitle: `with it's mountains`,
    background: '#2a86ba',
  },
  {
    title: 'Nature flower',
    subtitle: 'all in pink',
    background: '#fd3555',
  },
].reverse();

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const up = document.getElementById('up');
const down = document.getElementById('down');

text.forEach(el => {
  const div = document.createElement('div');

  div.innerHTML = `<h1>${el.title}</h1><h2>${el.subtitle}</h2>`;
  div.className = 'content';
  div.style.backgroundColor = el.background;

  first.appendChild(div);
});
let scrollHeight = first.scrollHeight - window.innerHeight;
let secondScrollHeight = 0;
first.scroll(0, scrollHeight);

up.addEventListener('click', () => {
  const height = window.innerHeight;

  if (scrollHeight === 0) {
    scrollHeight = first.scrollHeight - height;
    secondScrollHeight = 0;
    first.scroll({
      top: scrollHeight,
      behavior: 'smooth',
    });
    second.scroll({
      top: 0,
      behavior: 'smooth',
    });
  } else {
    scrollHeight -= height;
    secondScrollHeight += height;
    first.scroll({
      top: scrollHeight,
      behavior: 'smooth',
    });

    second.scroll({
      top: secondScrollHeight,
      behavior: 'smooth',
    });
  }
});

down.addEventListener('click', () => {
  const height = window.innerHeight;

  if (scrollHeight === first.scrollHeight - height) {
    scrollHeight = 0;
    secondScrollHeight = first.scrollHeight - height;
    first.scroll({
      top: scrollHeight,
      behavior: 'smooth',
    });
    second.scroll({
      top: secondScrollHeight,
      behavior: 'smooth',
    });
  } else {
    scrollHeight += height;
    secondScrollHeight -= height;
    first.scroll({
      top: scrollHeight,
      behavior: 'smooth',
    });

    second.scroll({
      top: secondScrollHeight,
      behavior: 'smooth',
    });
  }
});
