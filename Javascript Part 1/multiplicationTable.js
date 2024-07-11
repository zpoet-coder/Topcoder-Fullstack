// 创建一个表格单元格，并添加到表格行中
function createTableCell(row, col) {
  let cell = document.createElement('td');
  cell.textContent = `${row} * ${col} = ${row * col}`;
  return cell;
}

// 创建表格并添加到#app中
export function createTable() {
  let table = document.createElement('table');
  for (let row = 1; row <= 9; row++) {
    let tr = document.createElement('tr');
    for (let col = 1; col <= row; col++) {
      let cell = createTableCell(row, col);
      tr.appendChild(cell);
    }
    table.appendChild(tr);
  }
  let appEle = document.getElementById('app');
  appEle.appendChild(table);
}
