/* custom cursor */
const dot = document.createElement('div');
dot.className = 'cursor-dot';
document.body.appendChild(dot);

const ring = document.createElement('div');
ring.className = 'cursor-ring';
document.body.appendChild(ring);

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', function(e) {
  mx = e.clientX;
  my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top = my + 'px';
});

(function animateRing() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
})();

const page = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(function(a) {
  if (a.getAttribute('href') === page) {
    a.classList.add('active');
  }
});
const sections = document.querySelectorAll('.section-wrap');
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(function(section) {
  observer.observe(section);
});