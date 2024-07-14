window.onload = function () {
  let data = JSON.parse(localStorage.getItem('tableData')) || [];
  data.forEach(function (item) {
    appendRow(item.id, item.firstName, item.lastName, item.age, item.address, item.score);
  });
};

let modal = document.getElementById('myModal');

let btn = document.getElementById('openModalBtn');

let span = document.getElementsByClassName('closeBtn')[0];

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

document.getElementById('modalForm').onsubmit = function (event) {
  event.preventDefault();
  let entryId = generateId();
  const firstName = document.getElementById('firstName').value;
  let lastName = document.getElementById('lastName').value;
  let age = document.getElementById('age').value;
  let address = document.getElementById('address').value;
  let score = document.getElementById('score').value;

  let data = JSON.parse(localStorage.getItem('tableData')) || [];
  data.push({ id: entryId, firstName: firstName, lastName: lastName, age: age, address: address, score: score });
  localStorage.setItem('tableData', JSON.stringify(data));

  appendRow(entryId, firstName, lastName, age, address, score);

  document.getElementById('modalForm').reset();

  modal.style.display = 'none';
};

function generateId() {
  let timestamp = Date.now().toString();
  let random = Math.random().toString().substr(2, 5);
  return timestamp + random;
}

function appendRow(entryId, firstName, lastName, age, address, score) {
  let newRow = document.createElement('tr');
  newRow.innerHTML =
    '<td>' +
    entryId +
    '</td>' +
    '<td>' +
    firstName +
    '</td>' +
    '<td>' +
    lastName +
    '</td>' +
    '<td>' +
    age +
    '</td>' +
    '<td>' +
    address +
    '</td>' +
    '<td>' +
    score +
    '</td>';
  document.getElementById('dataTable').getElementsByTagName('tbody')[0].appendChild(newRow);
}
