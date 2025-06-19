const elements = [
  { symbol: 'H', name: 'Hidrógeno', number: 1, category: 'nonmetal' },
  { symbol: 'He', name: 'Helio', number: 2, category: 'noble' },
  { symbol: 'Li', name: 'Litio', number: 3, category: 'alkaline' },
  { symbol: 'Be', name: 'Berilio', number: 4, category: 'alkaline-earth' }
];

const categoryColors = {
  'alkaline': '#facc15',
  'alkaline-earth': '#fbbf24',
  'transition': '#34d399',
  'noble': '#a78bfa',
  'nonmetal': '#60a5fa',
  'metalloid': '#f472b6',
  'lanthanide': '#fb923c',
  'actinide': '#f87171'
};

function renderElements() {
  const table = document.createElement('div');
  table.className = 'periodic-table';
  elements.forEach(el => {
    const div = document.createElement('div');
    div.className = 'element';
    div.style.backgroundColor = categoryColors[el.category] || '#a5b4fc';
    div.innerHTML = `<div>${el.symbol}</div><small>${el.number}</small>`;
    div.title = `${el.name}\nSímbolo: ${el.symbol}\nNº Atómico: ${el.number}`;
    table.appendChild(div);
  });
  document.body.appendChild(table);
}

window.addEventListener('load', renderElements);