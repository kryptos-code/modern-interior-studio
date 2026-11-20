const btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
nav.addEventListener('click',e=>{if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded',false)}});
document.getElementById('yr').textContent=new Date().getFullYear();
// Instagram placeholder: set the real URL here when available, e.g. 'https://instagram.com/yourhandle'
const IG_URL='';const ig=document.getElementById('ig');
if(IG_URL){ig.href=IG_URL;ig.textContent='Follow us on Instagram';ig.target='_blank';ig.rel='noopener'}else{ig.addEventListener('click',e=>e.preventDefault())}
// Contact form: posts to Netlify Forms without leaving the page
const form=document.getElementById('form'),st=document.getElementById('status');
form.addEventListener('submit',async e=>{
  e.preventDefault();st.textContent='Sending...';
  try{
    const r=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(new FormData(form)).toString()});
    if(!r.ok)throw new Error();
    form.reset();st.textContent='Thank you. We will call you back soon.';
  }catch(_){st.innerHTML='Could not send. Please call +91 99115 83548 or <a href="https://wa.me/919911583548">message us on WhatsApp</a>.'}
});
// Portfolio filter
const chips=document.querySelectorAll('.chip');
if(chips.length){
  const items=document.querySelectorAll('#pgrid .ph'),cnt=document.getElementById('count');
  chips.forEach(c=>c.addEventListener('click',()=>{
    chips.forEach(o=>o.setAttribute('aria-pressed',o===c));
    let n=0;items.forEach(i=>{const show=c.dataset.f==='all'||i.dataset.cat===c.dataset.f;i.hidden=!show;if(show)n++});
    cnt.textContent='Showing '+n+(n===1?' project':' projects');
  }));
}
