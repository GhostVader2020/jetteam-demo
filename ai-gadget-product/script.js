
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


const imgs=["./assets/img-1.jpg","./assets/img-2.jpg","./assets/img-3.jpg"];
const wrap=document.getElementById('interactive-wrap');
wrap.innerHTML='<div class="grid cols-3" id="thumbs"></div><div class="hero-visual" style="margin-top:.75rem;min-height:220px;"><img id="mainImg" alt="Product photo"></div>';
const main=document.getElementById('mainImg'); const thumbs=document.getElementById('thumbs');
imgs.forEach(src=>{ const a=document.createElement('a'); a.href='#'; a.onclick=(e)=>{e.preventDefault(); main.src=src;}; a.innerHTML='<div class="card" style="padding:0;overflow:hidden;"><img src="'+src+'" alt="thumb" style="width:100%;height:120px;object-fit:cover;"></div>'; thumbs.appendChild(a); });
main.src=imgs[0];
