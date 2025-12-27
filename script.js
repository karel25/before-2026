const pages = document.querySelectorAll('.page');
let current = 0;

document.body.addEventListener('click', () => {
  if (current < pages.length - 1) {
    pages[current].classList.remove('active');
    current++;
    pages[current].classList.add('active');
  }
});

// Typewriter effect
document.querySelectorAll('.typewriter').forEach(el => {
  const text = el.textContent;
  el.textContent = '';
  let i = 0;
  const typing = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(typing);
  }, 40);
});

// Easter egg
document.querySelector('.secret')?.addEventListener('dblclick', () => {
  alert("You were always more important than you knew.");
});
