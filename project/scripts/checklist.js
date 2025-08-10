const KEY = 'sae-checklist';

function loadItems(){
  try{
    return JSON.parse(localStorage.getItem(KEY)) || [];
  }catch{ return []; }
}

function saveItems(items){
  localStorage.setItem(KEY, JSON.stringify(items));
}

function render(items){
  const list = document.getElementById('checklist');
  if (!list) return;
  list.innerHTML = '';
  items.forEach((txt, i) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <label><input type="checkbox" data-index="${i}"> ${txt}</label>
      <button class="btn outline" data-remove="${i}" aria-label="Remove">Remove</button>
    `;
    list.appendChild(li);
  });
}

let items = loadItems();
render(items);

const addForm = document.getElementById('addItemForm');
if (addForm){
  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('newItem');
    const val = input.value.trim();
    if (!val) return;
    items.push(val);
    saveItems(items);
    render(items);
    input.value = '';
    input.focus();
  });
}

document.addEventListener('click', (e) => {
  if (e.target.matches('button[data-remove]')){
    const idx = Number(e.target.getAttribute('data-remove'));
    items = items.filter((_, i) => i !== idx);
    saveItems(items);
    render(items);
  }
});
