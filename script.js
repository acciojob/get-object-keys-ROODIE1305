//your JS code here. If required.
const student = {
  name: "Rudra"
  age: 23,
  city: "Delhi"
}

Object.prototype.getKeys = function() {
  return Object.keys(this)  
}

console.log(getKeys(student))