const fs = require('fs');

const fileName = process.argv[2];
/*
fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return ;
    }
    var ok = data;
});
*/

let testo 
try {
    const data = fs.readFileSync(fileName, 'utf8');
    console.log(data);
    testo = data
} catch (error) {
    console.error(error.message);
}

let okk = testo.split(' ');
console.log(okk)
console.log(typeof okk)

let cool = okk.map(j => parseInt(j))

console.log(cool)


console.log('----------------------------BUBBLE-----------------------------')

let run = 0
function bblSort(arr){
    
    for(var i = 0; i < arr.length; i++){
        run = run + 1
      // Last i elements are already in place 
      for(var j = 0; j < ( arr.length - i -1 ); j++){
         
        // Checking if the item at present iteration
        // is greater than the next iteration
        if(arr[j] > arr[j+1]){
           
          // If the condition is true then swap them
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp
          run = run + 1
        }
      }
    }
    // Print the sorted array
    return arr;
   }
console.log(cool)
console.log(bblSort(cool))
console.log(run)

console.log('----------------------------insert-----------------------------')

let runn = 0
const insertion_Sort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        runn = runn + 1
      let j = i - 1
      let temp = nums[i]
      while (j >= 0 && nums[j] > temp) {
        nums[j + 1] = nums[j]
        j--
        runn = runn + 1
      }
      nums[j+1] = temp
    }
    return nums
  }

console.log(cool)
console.log(insertion_Sort(cool))
console.log(runn)

console.log('----------------------------select-----------------------------')

let runnn = 0
function sort(tab){
    for(var i = 0; i < tab.length; i++){
    runnn = runnn + 1
      //stocker l'index de l'élément minimum
      var min = i; 
      for(var j = i+1; j < tab.length; j++){
        if(tab[j] < tab[min]){
         // mettre à jour l'index de l'élément minimum
         runnn = runnn + 1
         min = j; 
        }
      }
      var tmp = tab[i];
      tab[i] = tab[min];
      tab[min] = tmp;
    }
    return tab;
  };
  

console.log(cool)
console.log(sort(cool))
console.log(runnn)
