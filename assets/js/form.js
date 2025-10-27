
/* form.js - validação avançada e verificação de consistência de dados */
(function(global){
  function apenasNumeros(str){ return (str || '').replace(/\D/g,''); }

  // Validação do CPF (algoritmo oficial simples)
  function validaCPF(cpf){
    if(!cpf) return false;
    cpf = apenasNumeros(cpf);
    if(cpf.length !== 11) return false;
    // rejeita CPFs com todos os dígitos iguais
    if(/^(\d)\1+$/.test(cpf)) return false;
    let soma = 0, resto;
    for(let i=1;i<=9;i++) soma = soma + parseInt(cpf.substring(i-1,i)) * (11 - i);
    resto = (soma * 10) % 11;
    if((resto === 10) || (resto === 11)) resto = 0;
    if(resto !== parseInt(cpf.substring(9,10))) return false;
    soma = 0;
    for(let i=1;i<=10;i++) soma = soma + parseInt(cpf.substring(i-1,i)) * (12 - i);
    resto = (soma * 10) % 11;
    if((resto === 10) || (resto === 11)) resto = 0;
    if(resto !== parseInt(cpf.substring(10,11))) return false;
    return true;
  }

  function mascaraCPF(v){ v = apenasNumeros(v); v = v.replace(/(\\d{3})(\\d)/,'$1.$2'); v = v.replace(/(\\d{3})(\\d)/,'$1.$2'); v = v.replace(/(\\d{3})(\\d{1,2})$/,'$1-$2'); return v; }
  function mascaraTel(v){ v = apenasNumeros(v); if(v.length <= 10) v = v.replace(/(\\d{2})(\\d{4})(\\d{0,4})/,'($1) $2-$3'); else v = v.replace(/(\\d{2})(\\d{5})(\\d{4})/,'($1) $2-$3'); return v.trim(); }
  function mascaraCEP(v){ v = apenasNumeros(v); v = v.replace(/(\\d{5})(\\d)/,'$1-$2'); return v; }

  function attachMasks(form){
    const cpf = form.querySelector('input[name="cpf"]');
    const tel = form.querySelector('input[name="telefone"]');
    const cep = form.querySelector('input[name="cep"]');

    if(cpf) cpf.addEventListener('input', e=> e.target.value = mascaraCPF(e.target.value));
    if(tel) tel.addEventListener('input', e=> e.target.value = mascaraTel(e.target.value));
    if(cep) cep.addEventListener('input', e=> e.target.value = mascaraCEP(e.target.value));
  }

  function showFieldError(field, message){
    field.classList.add('invalid');
    const next = field.nextElementSibling;
    if(next && next.classList && next.classList.contains('field-error')){
      next.textContent = message; next.style.display = 'block';
    }else{
      const el = document.createElement('div');
      el.className = 'field-error'; el.textContent = message;
      field.parentNode.insertBefore(el, field.nextSibling);
    }
  }

  function clearFieldError(field){
    field.classList.remove('invalid');
    const next = field.nextElementSibling;
    if(next && next.classList && next.classList.contains('field-error')) next.style.display = 'none';
  }

  function bindForm(form){
    if(!form) return;
    attachMasks(form);
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // limpar erros antigos
      form.querySelectorAll('.field-error').forEach(n=>n.remove());
      const data = Object.fromEntries(new FormData(form).entries());
      let valid = true;

      // checagens básicas
      if(!data.nome || data.nome.trim().length < 3){ showFieldError(form.querySelector('[name=\"nome\"]'), 'Nome muito curto'); valid = false; }
      if(!data.email || !/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(data.email)){ showFieldError(form.querySelector('[name=\"email\"]'), 'E-mail inválido'); valid = false; }

      // CPF: consistência adicional
      if(!data.cpf || !validaCPF(data.cpf)){ showFieldError(form.querySelector('[name=\"cpf\"]'), 'CPF inválido'); valid = false; }

      // Telefone simples
      if(!data.telefone || apenasNumeros(data.telefone).length < 10){ showFieldError(form.querySelector('[name=\"telefone\"]'), 'Telefone inválido'); valid = false; }

      if(!data.tipo || data.tipo === ''){ showFieldError(form.querySelector('[name=\"tipo\"]'), 'Escolha um tipo'); valid = false; }

      if(!valid){
        UI.showToast('Corrija os campos destacados.');
        return false;
      }

      // salvar no localStorage
      const payload = {
        nome: data.nome.trim(),
        email: data.email.trim(),
        cpf: apenasNumeros(data.cpf),
        telefone: data.telefone,
        nascimento: data.nascimento || '',
        endereco: data.endereco || '',
        cidade: data.cidade || '',
        estado: data.estado || '',
        tipo: data.tipo || '',
        obs: data.obs || ''
      };
      Storage.save(payload);
      UI.showToast('Cadastro salvo localmente.');
      form.reset();
      // navega para listagem
      SPA.navigateTo('cadastros');
      return true;
    });
  }

  // expor funções
  global.FormModule = { bindForm, attachMasks, validaCPF };
})(window);
