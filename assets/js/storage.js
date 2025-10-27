
/* storage.js - helpers para salvar/ler cadastros via localStorage */
(function(global){
  const KEY = 'ong_esperanca_cadastros_v1';
  const S = {};
  S.list = function(){
    try{
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    }catch(e){ return []; }
  };
  S.save = function(item){
    const list = S.list();
    list.push(item);
    localStorage.setItem(KEY, JSON.stringify(list));
  };
  S.clear = function(){ localStorage.removeItem(KEY); };
  S.renderListHTML = function(){
    const list = S.list();
    if(!list || list.length === 0) return '<p>Nenhum cadastro salvo.</p>';
    return `<ul style="list-style:none;padding:0;margin:0">` + list.map((it, idx)=>`
      <li style="padding:8px;border-bottom:1px solid #eee">
        <strong>${it.nome}</strong> — <span class="badge">${it.tipo}</span><br>
        <small>${it.email} • ${it.telefone || ''} • ${it.cidade || ''} ${it.estado || ''}</small>
      </li>
    `).join('') + `</ul>`;
  };

  global.Storage = S;
})(window);
