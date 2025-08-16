
/* Mobile nav toggle */
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger && menu) {
  burger.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });
}

/* Helper: smooth scroll for anchor links */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Generic contact form handler (no backend; shows a message)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    status.textContent = "Thanks, " + data.name + "! We'll be in touch at " + data.email + ".";
    form.reset();
  });
}


// Lightbox gallery
const items = [
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551727974-8af20a3322e0?q=80&w=1600&auto=format&fit=crop"
];
const wrap = document.getElementById('interactive-wrap');
wrap.innerHTML = '<div class="grid cols-2" id="grid"></div><dialog id="dlg" style="border:none;border-radius:1rem;max-width:80vw;box-shadow:0 20px 60px rgba(0,0,0,.5);"><img id="dlgImg" alt="Large" style="width:100%;height:auto;display:block;"><form method="dialog" style="text-align:right;margin-top:.5rem;"><button class="btn">Close</button></form></dialog>';
const grid = document.getElementById('grid');
const dlg = document.getElementById('dlg');
const dlgImg = document.getElementById('dlgImg');
items.forEach(src=>{
  const div=document.createElement('div');
  div.className='card'; div.style.padding='0'; div.style.overflow='hidden';
  div.innerHTML='<img src="'+src+'" alt="portfolio" style="width:100%;height:200px;object-fit:cover;display:block;cursor:zoom-in;">';
  div.onclick=()=>{ dlgImg.src=src; dlg.showModal(); };
  grid.appendChild(div);
});
