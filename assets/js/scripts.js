document.addEventListener("DOMContentLoaded", () => {
  const cpf = document.querySelector('input[name="cpf"]');
  const tel = document.querySelector('input[name="telefone"]');
  if (cpf) cpf.addEventListener("input", e => e.target.value = mascaraCPF(e.target.value));
  if (tel) tel.addEventListener("input", e => e.target.value = mascaraTel(e.target.value));
});
function mascaraCPF(v) { return v.replace(/\D/g, "").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2") }
function mascaraTel(v) { return v.replace(/\D/g, "").replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d{4})$/, "$1-$2") }