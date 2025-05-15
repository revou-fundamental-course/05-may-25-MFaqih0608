document.getElementById('belajarForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nama = this.nama.value;
  const tanggal = this.tanggal_lahir.value;
  const gender = this.gender.value;
  const pesan = this.pesan.value;

  const tbody = document.getElementById('dataTable');
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${nama}</td>
    <td>${new Date(tanggal).toLocaleDateString('en-US')}</td>
    <td>${gender}</td>
    <td>${pesan}</td>
    <td><a href="#">Klik Disini</a></td>
    <td><button class="delete-btn">🗑️</button></td>
  `;

  row.querySelector('.delete-btn').addEventListener('click', () => {
    row.remove();
  });

  tbody.appendChild(row);

  this.reset();
});
