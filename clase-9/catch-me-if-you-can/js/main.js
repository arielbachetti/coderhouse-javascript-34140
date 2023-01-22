const leo = document.getElementById('leo');

leo.addEventListener('mouseover', (e) => {
  e.target.style.position ='absolute';
  e.target.style.top = `${Math.floor(Math.random() * 90 + 5)}%`;
  e.target.style.left = `${Math.floor(Math.random() * 90 + 5)}%`;
});
