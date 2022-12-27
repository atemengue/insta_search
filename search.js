/** @format */

const people = [
  {
    firstName: 'Leanna',
    lastName: 'Kent',
    occupation: 'activist',
    age: 24,
  },
  {
    firstName: 'Zayan',
    lastName: 'Goodman',
    occupation: 'cook',
    age: 30,
  },
  {
    firstName: 'Leana',
    lastName: 'Malone',
    occupation: 'programmer',
    age: 18,
  },
  {
    firstName: 'Piper',
    lastName: 'Gallagher',
    occupation: 'businessman',
    age: 35,
  },
];

function binarySearchInArray(arr, compareFunc) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    let result = compareFunc(arr[middle]);
    // NOTE the ".email" part added
    if (result === 0) {
      return arr[middle];
    } else if (result < 0) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

const findLeana = (currentObject) => {
  if (
    currentObject.firstName === 'Leana' &&
    currentObject.lastName === 'Malone'
  ) {
    return 0;
  }
  if (currentObject.firstName > 'Leana') {
    return 1;
  } else if (currentObject.firstName < 'Leana') {
    return -1;
  } else {
    /* case when the firstNames are equal, so we compare lastnames */
    if (currentObject.lastName > 'Malone') return 1;
    else return -1;
  }
};

const indexOfLeana = binarySearchInArray(people, findLeana);

console.log(indexOfLeana);
