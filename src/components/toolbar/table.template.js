const CODES = {
  A: 65,
  Z: 90,
};

function createCell() {
  return `
    <div class="cell" contenteditable></div>
  `;
}

function createCol(col) {
  return `
    <div class="column"> ${col} </div>
  `;
}

function createRow(content, title) {
  return `
    <div class="row">
        <div class="row-info">${title}</div>
        <div class="row-data">${content}</div>
    </div>
  `;
}

function toChar(_, idx) {
  return String.fromCharCode(CODES.A + idx);
}

export function createTable(rowsCount = 25) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(createCol)
    .join('');

  const cells = new Array(colsCount).fill('').map(createCell).join('');

  rows.push(createRow(cols, ''));

  for (let i = 0; i <= rowsCount; i++) {
    rows.push(createRow(cells, i));
  }

  return rows.join('');
}
