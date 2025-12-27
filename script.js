let current = 0;
const pages = document.querySelectorAll('.page');

function showPage(index) {
  pages.forEach((p, i) => {
    p.classList.toggle('active', i === index);
  });
}

function nextPage() {
  if (current < pages.length - 1) {
    current++;
    showPage(current);
  }
}

function prevPage() {
  if (current > 0) {
    current--;
    showPage(current);
  }
}

showPage(current);
