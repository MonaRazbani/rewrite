export function moveElementToFront<T>(arr: T[], index: number): T[] {
  if (index < 0 || index >= arr.length) {
    throw new Error('Index out of bounds');
  }

  const element = arr.splice(index, 1)[0];
  const newArr = arr.slice(0, index).concat(arr.slice(index, arr.length))

  newArr.unshift(element);


  return newArr;
}
