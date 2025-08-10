const products = [
  { id: 'w01', name: 'Widget One' },
  { id: 'w02', name: 'Widget Two' },
  { id: 'w03', name: 'Widget Three' },
  { id: 'g10', name: 'Gizmo 10' },
  { id: 'g11', name: 'Gizmo 11' }
];

(function init() {
  const key = 'reviewCount';
  const current = Number(localStorage.getItem(key) || 0);
  const next = current + 1;
  localStorage.setItem(key, String(next));
  document.getElementById('reviewCount').textContent = next;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get('product') || '';
  const product = products.find(p => p.id === productId);
  const rating = params.get('rating') || '';
  const date = params.get('installDate') || '';
  const features = params.getAll('features');
  const reviewText = params.get('reviewText') || '';
  const userName = params.get('userName') || '';

  const addRow = (dt, dd) => {
    const wrap = document.getElementById('summary');
    const dte = document.createElement('dt');
    dte.textContent = dt;
    const dde = document.createElement('dd');
    dde.textContent = dd || '—';
    wrap.append(dte, dde);
  };

  addRow('Product', product ? `${product.name} (${product.id})` : productId);
  addRow('Rating', rating);
  addRow('Installed', date);
  addRow('Features', features.length ? features.join(', ') : '');
  addRow('Review', reviewText);
  addRow('Name', userName);
})();
