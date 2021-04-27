const articles = document.querySelectorAll('article');

articles.forEach(article => {
  const button = document.createElement('button');
  button.addEventListener('click', () => {
    article.classList.toggle('active');
    button.innerHTML = article.classList.contains('active')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-chevron-down"></i>';
  });
  if (article.classList.contains('active')) {
    button.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    button.innerHTML = '<i class="fas fa-chevron-down"></i>';
  }

  article.appendChild(button);
});
