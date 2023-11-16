// bind

const obj = {
  firstName: 'Hitesh',
  lastName: 'Marwaha',
};

function printName(city, country) {
  return (
    this.firstName + ' ' + this.lastName + ' from ' + city + ', ' + country
  );
}

const newFunc = printName.bind(obj);
const newFunc2 = printName.bind(obj, 'Delhi', 'India');
const newFunc3 = printName.bind(obj, 'Delhi');
// console.log(newFunc2());

// console.log(newFunc('Delhi', 'India'));
// console.log(newFunc3('India'));

Function.prototype.bind2 = function (contextObj = {}, ...args) {
  // this -> printName
  // contextObj ->Obj
  let func = this;

  return function (...otherArgs) {
    // console.log(otherArgs);
    return func.call(contextObj, ...args, ...otherArgs);
    //return printName.call(obj, 'Delhi', 'India')
  };
};

const func = printName.bind2(obj, 'Delhi', 'India');
console.log(func);
console.log(func());

const func2 = printName.bind2(obj);

console.log(func2('Delhi', 'India'));
