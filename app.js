'use strict';
const $ = (selector) => document.querySelector(selector);
$('#year').textContent = new Date().getFullYear();
const toggle = $('.menu-toggle');
function closeMenu() { $('#nav').classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded',String(open)); $('#nav').classList.toggle('open',open); });
$('#nav').querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeMenu();});
$('#load-instagram').addEventListener('click', () => {
 const container = $('#instagram-container'); const frame = document.createElement('iframe');
 frame.src='https://www.instagram.com/grazileoa/embed/';frame.title='Perfil de Grazi Leão no Instagram';frame.loading='lazy';frame.referrerPolicy='strict-origin-when-cross-origin';
 container.append(frame);container.hidden=false;$('#load-instagram').hidden=true;
 $('.embed-note').textContent='Se o perfil não aparecer, abra as publicações diretamente no Instagram pelo link abaixo.';
});
const dialog=$('#brief-dialog');
$('#open-brief').addEventListener('click',()=>{dialog.showModal();document.body.classList.add('dialog-open');});
$('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>document.body.classList.remove('dialog-open'));
dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
function draftMessage(){
 const name=$('#name').value.trim(); const project=$('#project').value.trim();
 const message=`Olá, Grazi! Meu nome é ${name}. Conheci seu site e gostaria de conversar sobre um projeto.\n\n${project}`;
 return $('#channel').value==='email' ? `mailto:grazi-silva@hotmail.com?subject=${encodeURIComponent('Novo projeto — '+name)}&body=${encodeURIComponent(message)}` : `https://wa.me/5562984580716?text=${encodeURIComponent(message)}`;
}
$('#brief-form').addEventListener('submit',e=>{e.preventDefault();const link=$('#send-message');link.href=draftMessage();link.hidden=false;link.textContent=$('#channel').value==='email'?'Abrir no e-mail ↗':'Abrir no WhatsApp ↗';link.focus();});
$('#brief-form').addEventListener('input',()=>{$('#send-message').hidden=true;});
