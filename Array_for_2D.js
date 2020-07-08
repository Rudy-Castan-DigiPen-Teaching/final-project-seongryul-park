function Array_for_2D(rows, columns) {
  let grid = [];
  for (let i = 0; i < rows; ++i)
    grid.push(new Array(columns));
  return grid;
}