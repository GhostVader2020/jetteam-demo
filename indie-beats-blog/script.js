
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


const posts=[{title:"Analog Warmth",tag:"reviews"},{title:"DIY Pedals 101",tag:"how-to"},{title:"Bandcamp Finds",tag:"discover"},{title:"Studio Notes",tag:"how-to"},{title:"Friday Mixtape",tag:"discover"}];
const wrap=document.getElementById('interactive-wrap');
wrap.innerHTML='<div class="grid cols-3" id="thumbs"></div><div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-top:1rem;" id="tags"></div><ul id="list" style="padding-left:1.2rem;"></ul>';
const thumbs=document.getElementById('thumbs'); ["./assets/img-1.jpg","./assets/img-2.jpg","./assets/img-3.jpg"].forEach(src=>{ thumbs.innerHTML+='<div class="card" style="padding:0;overflow:hidden;"><img src="'+src+'" alt="thumb" style="width:100%;height:120px;object-fit:cover;"></div>'; });
const tags=["all","reviews","how-to","discover"]; const tagsEl=document.getElementById('tags');
tags.forEach(t=>{ const b=document.createElement('button'); b.className='btn secondary'; b.textContent=t; b.onclick=()=>render(t); tagsEl.appendChild(b); });
function render(filter='all'){ const ul=document.getElementById('list'); ul.innerHTML=''; posts.filter(p=>filter==='all'||p.tag===filter).forEach(p=>{ const li=document.createElement('li'); li.textContent=p.title+' — '+p.tag; ul.appendChild(li);}); } render();
