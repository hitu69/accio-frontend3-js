const obj = {
  firstName: 'Hitesh',
  lastName: 'Marwaha',
};

function printName(city, country) {
  return (
    this.firstName + ' ' + this.lastName + ' from ' + city + ', ' + country
  );
}

// console.log(printName.call(obj));

// call -> prototype -> Function

Function.prototype.call2 = function (contextObj = {}, ...args) {
  // this -> function
  // contextObj -> object
  if (typeof this !== 'function') {
    throw new Error(this + 'is not callable');
  }

  // add this function inside contextObj
  contextObj.fn = this;
  // console.log(contextObj);
  const ans = contextObj.fn(...args);
  delete contextObj.fn;
  return ans;
};

console.log(printName.call2(obj, 'Delhi', 'India'));
console.log(obj);

const obj2 = {
  firstName: 'John',
  lastName: 'Doe',
  printName() {
    return this.firstName + ' ' + this.lastName;
  },
};

// console.log(obj2.printName());
