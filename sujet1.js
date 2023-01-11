function versionUn(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] + arr[j] === k) {
                return true;
            }
        }
    }
    return false;
}

let ok = [10, 15, 3, 7]

console.log(versionUn(ok, 18))


function versionDeux(arr, k) {
    const nums = new Set();
    for (const num of arr) {
        if (nums.has(k - num)) {
            return true;
        }
        nums.add(num);
    }
    return false;
}

console.log(versionDeux(ok, 25))

function versionTrois(arr, k) {
    const nums = {};
    for (const num of arr) {
        if (nums[k - num]) {
            return true;
        }
        nums[num] = true;
    }
    return false;
}
console.log(versionTrois(ok, 26))