const products = [
  { id: 'spain-exchange', name: 'Spain Exchange Program' },
  { id: 'germany-scholar', name: 'Germany Scholarship Guide' },
  { id: 'netherlands-housing', name: 'Netherlands Housing Kit' },
  { id: 'packing-list', name: 'Ultimate Packing List' },
];

const select = document.getElementById('product');
if (select){
  const ph = document.createElement('option');
  ph.textContent = 'Select a Product ...';
  ph.value = '';
  ph.disabled = true;
  ph.selected = true;
  select.appendChild(ph);

  products.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = p.name;
    select.appendChild(opt);
  });
}

(function(){
  const block = document.getElementById('reviewCounter');
  if (!block) return;
  const KEY = 'review-count';
  const n = Number(localStorage.getItem(KEY) || '0') + 1;
  localStorage.setItem(KEY, String(n));
  block.textContent = n;
})();
