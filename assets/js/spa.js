
/* spa.js - roteador simples e loader de templates */
(function(global){
  const SPA = {};
  const app = document.getElementById('app');

  SPA.routes = {
    '': Templates.home,
    '/': Templates.home,
    'projetos': Templates.projetos,
    'cadastro': Templates.cadastro,
    'cadastros': function(){ return Templates.cadastros(Storage.renderListHTML()); },
    'sobre': Templates.sobre
  };

  SPA.render = function(route){
    const fn = SPA.routes[route] || Templates.home;
    app.innerHTML = typeof fn === 'function' ? fn() : fn;
    // after render hooks
    // bind form if present
    const form = document.getElementById('formCadastro');
    if(form){
      FormModule.bindForm(form);
    }
    // update focus for accessibility
    app.focus();
  };

  SPA.navigateTo = function(route){
    window.location.hash = '#/' + route;
    SPA.handleHashChange();
  };

  SPA.handleHashChange = function(){
    const hash = window.location.hash.replace('#/','') || '/';
    const route = hash === '/' ? '/' : hash;
    SPA.render(route);
    // close mobile nav if open
    document.body.classList.remove('nav-open');
  };

  window.addEventListener('hashchange', SPA.handleHashChange);
  window.addEventListener('load', ()=>{
    UI.initMenu();
    // initial route
    SPA.handleHashChange();
  });

  global.SPA = SPA;
})(window);
