const filterButtons=document.querySelectorAll('.filters button');
const cards=document.querySelectorAll('.video-card');
filterButtons.forEach(button=>button.addEventListener('click',()=>{
 const filter=button.dataset.filter;
 filterButtons.forEach(item=>item.classList.toggle('active',item===button));
 cards.forEach(card=>{const show=filter==='todos'||card.dataset.category===filter;card.hidden=!show;if(!show)card.querySelector('video')?.pause();});
}));
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav-links');
if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');nav.querySelectorAll('a').forEach(a=>a.classList.remove('active'));link.classList.add('active');}));}
