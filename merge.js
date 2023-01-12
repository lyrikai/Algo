const fs = require('fs');

const fileName = process.argv[2];

let tab 
try {
    const data = fs.readFileSync(fileName, 'utf8');
    console.log(data);
    testo = data
} catch (error) {
    console.error(error.message);
}


if (tab){
  let tabb
  let cool
  tabb = tab.split(' ');
   cool = tabb.map(j => parseInt(j))

function mergeSort(arr) {
  if (arr.length < 2) {
      return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let il = 0;
  let ir = 0;
  while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
          result.push(left[il++]);
      } else {
          result.push(right[ir++]);
      }
  }
  return result.concat(left.slice(il)).concat(right.slice(ir));
}

console.log(mergeSort(cool))

}else{
  console.log("il n'y a pas de fichier data")
}