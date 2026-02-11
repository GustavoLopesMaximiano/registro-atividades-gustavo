const records = [];

const recordsList = document.getElementById('records');
const btnAdd = document.getElementById('btnAdd');

function render() {
  recordsList.innerHTML = '';

  records.forEach((r, index) => {
    const li = document.createElement('li');
    li.textContent = `${r.title} — R$${r.duration}`;
    if (r.duration < 0) {
        li.className = 'record red-text';
    } else {
        li.className = 'record green-text'
    }
    recordsList.appendChild(li);
  });
}

btnAdd.addEventListener('click', () => {
  const title = prompt('Título da Transação:');
  if (!title) return;

  const duration = prompt('Quantia de Transação (em reais):');
  if (!duration) return;

  records.push({ title: title.trim(), duration: duration.trim() });

  render();
});

render();