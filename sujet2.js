let arrUn = [3, 7, 8, 3, 6, 1]
let arrDeux = [1, 4, 5, 8]

function versionUn(heights) {
   
        let count = 0;
        for (let i = 0; i < heights.length; i++) {
            let j = i + 1;
            for (; j < heights.length; j++) {
                if (heights[i] <= heights[j]) {
                    break;
                }
            }
            if(j === heights.length) count++;
        }
        return count; 
}

console.log(versionUn(arrUn))
console.log(versionUn(arrDeux))

function versionDeux(heights) {
    let max_so_far = -1;
    let count = 0;
    for (let i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > max_so_far) {
            count++;
            max_so_far = heights[i];
        }
    }
    return count;
}

console.log(versionDeux(arrUn))
console.log(versionDeux(arrDeux))

function versionTrois(heights) {
    let max_so_far = -1;
    let count = 0;
    for (let i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > max_so_far) {
            count++;
            max_so_far = heights[i];
        }
    }
    return count;
}

console.log(versionTrois(arrUn))
console.log(versionTrois(arrDeux))