// Smooth scrolling (built-in via CSS behavior)
document.documentElement.style.scrollBehavior = "smooth";

// Typewriter
const el = document.querySelector('.typewriter');
const text = el.textContent;
el.textContent = '';
let i = 0;

const typing = setInterval(() => {
  el.textContent += text[i];
  i++;
  if (i >= text.length) clearInterval(typing);
}, 40);

// Letter toggle
function toggleLetter(letter) {
  const p = letter.querySelector('p');
  p.style.display = p.style.display === 'block' ? 'none' : 'block';
}
