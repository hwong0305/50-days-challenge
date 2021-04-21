fetch('https://randomuser.me/api?results=50')
  .then(r => r.json())
  .then(data => {
    console.log(data);
  });
