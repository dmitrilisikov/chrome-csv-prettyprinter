const csv = document.body.childNodes[0].innerHTML;
const csvLines = csv.split('\n');

if (isCSV()) {
  document.body.childNodes[0].innerHTML = renderTable();
}

function isCSV() {
  return true;
}

function getSeparator() {
  return ',';
}

function renderTable() {
  return `<table class="table">
      ${renderHeader()}
      ${renderRows()}
    </table>`;
}

function renderHeader() {
  const headerRow = csvLines[0];
  const columnNames = headerRow.split(getSeparator());
  
  return `<thead>
      ${ columnNames.map(name => `<th>${name}</th>`).join(' ') }
    </thead>`;
}

function renderRows() {
  csvLines.splice(0, 1);
  return csvLines.map(row => renderRow(row)).join(' ');
}

function renderRow(row) {
  const rowValues = row.split(getSeparator());
  return `<tr>${ rowValues.map(value => `<td>${value}</td>`).join(' ') }</tr>`;
}