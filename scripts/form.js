const products = [
  { id: 'w01', name: 'Widget One' },
  { id: 'w02', name: 'Widget Two' },
  { id: 'w03', name: 'Widget Three' },
  { id: 'g10', name: 'Gizmo 10' },
  { id: 'g11', name: 'Gizmo 11' }
];

(function populateProducts() {
  const select = document.getElementById('product');
  products.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;       
    opt.textContent = p.name; // display = name
    select.appendChild(opt);
  });
})();
