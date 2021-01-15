let cells = [];
let rows = [[],[],[],[],[],[],[],[],[]];
let cols = [[],[],[],[],[],[],[],[],[]];
let boxs = [[],[],[],[],[],[],[],[],[]];

class Cell {

  constructor (nums, row, col, box) {
    this.nums = nums;
    this.row = row-1;
    this.col = col-1;
    this.box = box-1;
    cells.push(this);
    rows[row-1].push(this);
    cols[col-1].push(this);
    boxs[box-1].push(this);
  }

  fit (num) {
    if(this.length === 1)
      return true;

    let checkcells = rows[this.row].concat(cols[this.col].concat(boxs[this.box]));
    checkcells = checkcells.filter(x => x.nums.length === 1);
    //console.log(checkcells);
    for(let cell of checkcells)
      if(cell.nums[0] === num)
        return false;

    return true;
  }

  reduce () {
    if(this.nums.length > 1)
    for (let i = 0; i < this.nums.length; i++) {
      if(!this.fit(this.nums[i]) && this.nums.length > 1) {
        this.nums = this.nums.filter(x => x != this.nums[i]);
        i--;
      }
      console.log(this.nums);
    }
  }
}

let p = [1, 2, 3, 4, 5, 6, 7, 8, 9];
new Cell(p,   1, 1, 1);
new Cell(p,   1, 2, 1);
new Cell([1], 1, 3, 1);
new Cell([2], 1, 4, 2);
new Cell(p,   1, 5, 2);
new Cell(p,   1, 6, 2);
new Cell([3], 1, 7, 3);
new Cell([8], 1, 8, 3);
new Cell([4], 1, 9, 3);
new Cell(p,   2, 1, 1);
new Cell(p,   2, 2, 1);
new Cell(p,   2, 3, 1);
new Cell([1], 2, 4, 2);
new Cell([6], 2, 5, 2);
new Cell([4], 2, 6, 2);
new Cell([5], 2, 7, 3);
new Cell([7], 2, 8, 3);
new Cell(p,   2, 9, 3);
new Cell([4], 3, 1, 1);
new Cell(p,   3, 2, 1);
new Cell(p,   3, 3, 1);
new Cell(p,   3, 4, 2);
new Cell([8], 3, 5, 2);
new Cell(p,   3, 6, 2);
new Cell(p,   3, 7, 3);
new Cell(p,   3, 8, 3);
new Cell(p,   3, 9, 3);
new Cell(p,   4, 1, 4);
new Cell(p,   4, 2, 4);
new Cell(p,   4, 3, 4);
new Cell(p,   4, 4, 5);
new Cell(p,   4, 5, 5);
new Cell([1], 4, 6, 5);
new Cell(p,   4, 7, 6);
new Cell([3], 4, 8, 6);
new Cell(p,   4, 9, 6);
new Cell(p,   5, 1, 4);
new Cell([1], 5, 2, 4);
new Cell([9], 5, 3, 4);
new Cell(p,   5, 4, 5);
new Cell([3], 5, 5, 5);
new Cell(p,   5, 6, 5);
new Cell([4], 5, 7, 6);
new Cell([6], 5, 8, 6);
new Cell(p,   5, 9, 6);
new Cell(p,   6, 1, 4);
new Cell([8], 6, 2, 4);
new Cell(p,   6, 3, 4);
new Cell([5], 6, 4, 5);
new Cell(p,   6, 5, 5);
new Cell(p,   6, 6, 5);
new Cell(p,   6, 7, 6);
new Cell(p,   6, 8, 6);
new Cell(p,   6, 9, 6);
new Cell(p,   7, 1, 7);
new Cell(p,   7, 2, 7);
new Cell(p,   7, 3, 7);
new Cell(p,   7, 4, 8);
new Cell([7], 7, 5, 8);
new Cell(p,   7, 6, 8);
new Cell(p,   7, 7, 9);
new Cell(p,   7, 8, 9);
new Cell([2], 7, 9, 9);
new Cell(p,   8, 1, 7);
new Cell([4], 8, 2, 7);
new Cell([5], 8, 3, 7);
new Cell([6], 8, 4, 8);
new Cell([2], 8, 5, 8);
new Cell([9], 8, 6, 8);
new Cell(p,   8, 7, 9);
new Cell(p,   8, 8, 9);
new Cell(p,   8, 9, 9);
new Cell([7], 9, 1, 7);
new Cell([2], 9, 2, 7);
new Cell([3], 9, 3, 7);
new Cell(p,   9, 4, 8);
new Cell(p,   9, 5, 8);
new Cell([8], 9, 6, 8);
new Cell([9], 9, 7, 9);
new Cell(p,   9, 8, 9);
new Cell(p,   9, 9, 9);


console.log(cells);
for (let i = 0; i < 9*9*100; i++) {
  cells[i%(9*9)].reduce();
  console.log(i, cells[i%(9*9)]);
}
let row = ""
for(let i = 0; i < 9*9; i++) {
  row += cells[i].nums[0] + " ";
  if((i+1) % 9 === 0) {
    console.log(row);
    row = ""
  }
}
