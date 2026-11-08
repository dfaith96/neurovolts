const toggle=document.getElementById('menuToggle');
const nav=document.getElementById('siteNav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const expanded=toggle.getAttribute('aria-expanded')==='true';
    toggle.setAttribute('aria-expanded',String(!expanded));
    toggle.setAttribute('aria-label',expanded?'Open menu':'Close menu');
    nav.classList.toggle('open',!expanded);
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Open menu');
    nav.classList.remove('open');
  }));
}
const year=document.getElementById('year');
if(year)year.textContent=String(new Date().getFullYear());
