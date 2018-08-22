// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let col = 0; col < 2 * n - 1; col++) {
//       let mid = Math.floor((2 * n - 1) / 2);
//       let leftB = mid - row;
//       let rightB = mid + row;
//       if (col >= leftB && col <= rightB) {
//         level += '#'
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level.join(''));
//   }
// }

// function pyramid(n) {
//   for (let row = 0; row < n; row++) {
//     let level = new Array(2 * n - 1);
//     let mid = Math.floor((2 * n - 1) / 2);
//     let leftB = mid - row;
//     let rightB = mid + row;
//     level.fill(' ', 0, leftB);
//     level.fill('#', leftB, rightB + 1);
//     level.fill(' ', rightB + 1);
//     console.log(level.join(''));
//   }
// }

function pyramid(n, row = 0, curr = '') {
  if (row === n) {
    return;
  }

  if (curr.length === 2 * n - 1) {
    console.log(curr);
    return pyramid(n, ++row);
  }

  let mid = Math.floor((2 * n - 1) / 2);
  let left = mid - row;
  let right = mid + row;

  if (curr.length >= left && curr.length <= right) {
    curr += '#';
  } else {
    curr += ' ';
  }

  return pyramid(n, row, curr);
}

module.exports = pyramid;
