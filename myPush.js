
Array.prototype.myPush = function (item) {
    let x = this.length
    this[x] = item
    return this
}
let newarray = [1, 2, 3, 4]


console.log(newarray.myPush(Number(prompt('Enter a number that adds into an Array?'))))