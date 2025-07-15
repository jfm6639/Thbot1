document.getElementById('trade-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const symbol = document.getElementById('symbol').value;
  const entry = document.getElementById('entry').value;
  const exit = document.getElementById('exit').value;
  const notes = document.getElementById('notes').value;

  const listItem = document.createElement('li');
  listItem.textContent = `${symbol} | Entry: $${entry} | Exit: $${exit} | Notes: ${notes}`;
  document.getElementById('trade-list').appendChild(listItem);

  this.reset();
});
