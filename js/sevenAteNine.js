function nomNom(arr) {
    let i = 0
    while (i+1 <= arr.length) {
        if (arr[i] > arr[i+1]){
          arr[i+1] = arr[i] + arr[i+1]
          arr.splice(i, 1)     
        } else {
            i++
        }  
    }
    return arr
  }
  module.exports = nomNom