
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger && menu) { burger.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex'; }); }
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) { e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

const form=document.getElementById('contactForm'); const status=document.getElementById('formStatus');
if(form){ form.addEventListener('submit',(e)=>{ e.preventDefault(); const data=Object.fromEntries(new FormData(form).entries());
status.textContent="Thanks, "+data.name+"! We'll be in touch at "+data.email+"."; form.reset(); }); }


const images=["./assets/img-1.jpg","./assets/img-2.jpg","./assets/img-3.jpg"];
const wrap=document.getElementById('interactive-wrap');
wrap.innerHTML='<div class="hero-visual" style="min-height:220px;"><img id="slide" alt="Trail photo"></div><div style="display:flex;gap:.5rem;margin-top:.5rem;"><button class="btn" id="prev">Prev</button><button class="btn" id="next">Next</button></div>';
const img=document.getElementById('slide'); let idx=0; function show(){ img.src=images[idx]; }
document.getElementById('prev').onclick=()=>{ idx=(idx-1+images.length)%images.length; show(); };
document.getElementById('next').onclick=()=>{ idx=(idx+1)%images.length; show(); }; show();
