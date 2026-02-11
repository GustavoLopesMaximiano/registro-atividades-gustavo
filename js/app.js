const records = [];

const recordsList = document.getElementById('records');
const btnAdd = document.getElementById('btnAdd');

function render() {
  recordsList.innerHTML = '';

  records.forEach((r, index) => {
    const li = document.createElement('li');
    li.className = 'record';
    li.textContent = `${r.title} — ${r.duration} min`;
    recordsList.appendChild(li);
  });
}

btnAdd.addEventListener('click', () => {
  const title = prompt('Título da atividade:');
  if (!title) return;

  const duration = prompt('Duração em minutos (ex: 30):');
  if (!duration) return;

  records.push({ title: title.trim(), duration: duration.trim() });

  render();
});

render();