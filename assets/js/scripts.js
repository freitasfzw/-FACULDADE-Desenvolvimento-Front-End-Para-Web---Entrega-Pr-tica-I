
document.addEventListener("DOMContentLoaded", () => {
  const cpf = document.querySelector('input[name="cpf"]');
  const tel = document.querySelector('input[name="telefone"]');
  const cep = document.querySelector('input[name="cep"]');

  function mascaraCPF(v) {
    return v.replace(/\D/g, '').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }
  function mascaraTel(v) {
    v = v.replace(/\D/g, '');
    if (v.length <= 10) v = v.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d)/, '$1-$2');
    else v = v.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');
    return v;
  }
  function mascaraCEP(v) { return v.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2'); }

  if (cpf) cpf.addEventListener('input', e => e.target.value = mascaraCPF(e.target.value));
  if (tel) tel.addEventListener('input', e => e.target.value = mascaraTel(e.target.value));
  if (cep) cep.addEventListener('input', e => e.target.value = mascaraCEP(e.target.value));

  const navToggle = document.querySelector('.nav-toggle');
  const body = document.body;
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      body.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', body.classList.contains('nav-open'));
    });
  }


  document.querySelectorAll('.nav-item > button.sub-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const item = e.target.closest('.nav-item');
      item.classList.toggle('open');
    });
  });


  function showToast(message, timeout = 4000) {
    let container = document.querySelector('.toasts');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toasts';
      document.body.appendChild(container);
    }
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<div class="toast-body">${message}</div><button class="close" aria-label="Fechar">&times;</button>`;
    container.appendChild(t);
    t.querySelector('.close').addEventListener('click', () => t.remove());
    setTimeout(() => { try { t.remove() } catch (e) { } }, timeout);
  }

  function openModal(contentHtml) {
    let backdrop = document.querySelector('.modal-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'modal-backdrop';
      backdrop.innerHTML = `<div class="modal" role="dialog" aria-modal="true"></div>`;
      document.body.appendChild(backdrop);
    }
    const modal = backdrop.querySelector('.modal');
    modal.innerHTML = contentHtml + `<div style="text-align:right;margin-top:12px"><button class="btn btn-primary close-modal">Fechar</button></div>`;
    backdrop.classList.add('open');
    backdrop.querySelector('.close-modal').addEventListener('click', closeModal);
    backdrop.addEventListener('click', (e) => { if (e.target === backdrop) closeModal(); });
  }
  function closeModal() { const b = document.querySelector('.modal-backdrop'); if (b) b.classList.remove('open'); }


  window.showToast = showToast;
  window.openModal = openModal;
  window.closeModal = closeModal;

  const form = document.querySelector('#formCadastro');
  if (form) {
    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        const firstInvalid = form.querySelector(':invalid');
        firstInvalid.focus();
        showToast('Por favor, corrija os campos em destaque.');
        return false;
      } else {
        e.preventDefault();
        showToast('Formulário validado (demo). Obrigado!');

        form.reset();
      }
    });
  }

});
