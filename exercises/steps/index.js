// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let curr = new Array(n);
//     curr.fill('#', 0, i);
//     curr.fill(' ', i);
//     console.log(curr.join(''));
//   }
// }

function steps(n, row = 0, curr = '') {
  if (row === n) {
    return;
  }

  if (curr.length === n) {
    console.log(curr);
    return steps(n, row + 1);
  }

  if (curr.length <= row) {
    curr += '#';
  } else {
    curr += ' '
  }

  steps(n, row, curr);
}

module.exports = steps;
