const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const current = document.querySelector('.second.barrier');

let currentStep = 1;
const elementList = {
  1: 'none',
  2: 'second',
  3: 'third',
  4: 'fourth',
};

nextBtn.addEventListener('click', () => {
  if (currentStep === 1) {
    prevBtn.disabled = false;
  }
  if (currentStep === 3) {
    nextBtn.disabled = true;
  }
  requestAnimationFrame(() => {
    document
      .querySelectorAll(`.${elementList[currentStep + 1]}`)
      .forEach(element => {
        element.classList.add('triggered');
      });

    currentStep++;
  });
});

prevBtn.addEventListener('click', () => {
  if (currentStep === 2) {
    prevBtn.disabled = true;
  }

  if (currentStep === 4) {
    nextBtn.disabled = false;
  }

  requestAnimationFrame(() => {
    document
      .querySelectorAll(`.${elementList[currentStep]}`)
      .forEach(element => {
        element.classList.remove('triggered');
      });

    currentStep--;
  });
});
