

cardToggle.addEventListener('click', () => {
  gridCards.classList.remove('invisible');
  listCards.classList.add('invisible');
});

listToggle.addEventListener('click', () => {
  gridCards.classList.add('invisible');
  listCards.classList.remove('invisible');
});