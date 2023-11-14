const obj = {
  firstName: 'Hitesh',
  lastName: 'Marwaha',
};

function printName(city, country) {
  return (
    this.firstName + ' ' + this.lastName + ' from ' + city + ', ' + country
  );
}

Function.prototype.apply2 = function (contextObj = {}, args) {
  // this -> function
  // contextObj -> object
  if (typeof this !== 'function') {
    throw new Error(this + 'is not callable');
  }
  if (!Array.isArray(args)) {
    throw new TypeError('provide arguments in an array');
  }

  // add this function inside contextObj
  contextObj.fn = this;
  // console.log(contextObj);
  const ans = contextObj.fn(...args);
  delete contextObj.fn;
  return ans;
};

console.log(printName.apply2(obj, ['Delhi', 'India']));
