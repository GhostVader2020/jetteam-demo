
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


const agenda=[{t:"09:00",d:"Coffee & Registration"},{t:"09:30",d:"Session 1 — Modern HTML Patterns"},{t:"11:00",d:"Break"},{t:"11:15",d:"Session 2 — CSS Layouts (Grid/Flex)"},{t:"12:45",d:"Lunch"},{t:"13:30",d:"Session 3 — JS Interactivity"},{t:"15:00",d:"Q&A and Wrap"}];
const wrap=document.getElementById('interactive-wrap'); wrap.innerHTML='<div id="agenda"></div>'; const container=document.getElementById('agenda');
agenda.forEach(item=>{ const d=document.createElement('details'); d.className='card'; const s=document.createElement('summary'); s.textContent=item.t+' — '+item.d.split(' — ')[0]; const p=document.createElement('p'); p.textContent=item.d; d.appendChild(s); d.appendChild(p); container.appendChild(d); });
