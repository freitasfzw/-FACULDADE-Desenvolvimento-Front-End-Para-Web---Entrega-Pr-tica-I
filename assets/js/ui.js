
/* ui.js - helpers de interface (toasts, modal, menu toggle) */
(function(global){
  const UI = {};

  UI.showToast = function(message, timeout = 3500){
    const container = document.querySelector('.toasts');
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<div class="toast-body">${message}</div><button class="close" aria-label="Fechar">&times;</button>`;
    container.appendChild(t);
    t.querySelector('.close').addEventListener('click', ()=> t.remove());
    setTimeout(()=> t.remove(), timeout);
  };

  UI.openModal = function(html){
    let backdrop = document.querySelector('.modal-backdrop');
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden','false');
    backdrop.innerHTML = `<div class="modal" role="dialog" aria-modal="true">${html}<div style="text-align:right;margin-top:12px"><button class="btn btn-primary close-modal">Fechar</button></div></div>`;
    backdrop.querySelector('.close-modal').addEventListener('click', ()=> UI.closeModal());
    backdrop.addEventListener('click', (e)=>{ if(e.target === backdrop) UI.closeModal(); });
  };

  UI.closeModal = function(){
    const backdrop = document.querySelector('.modal-backdrop');
    if(!backdrop) return;
    backdrop.classList.remove('open'); backdrop.setAttribute('aria-hidden','true');
    backdrop.innerHTML = '';
  };

  UI.initMenu = function(){
    const navToggle = document.querySelector('.nav-toggle');
    const body = document.body;
    if(navToggle){
      navToggle.addEventListener('click', ()=>{
        body.classList.toggle('nav-open');
        const expanded = body.classList.contains('nav-open');
        navToggle.setAttribute('aria-expanded', expanded);
      });
    }
    // sub-toggle buttons on mobile
    document.querySelectorAll('.nav-item > button.sub-toggle').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const item = btn.closest('.nav-item');
        item.classList.toggle('open');
      });
    });
  };

  global.UI = UI;
})(window);
