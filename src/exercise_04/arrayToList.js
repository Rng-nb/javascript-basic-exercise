export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  function MyList(value) {
    this.value = value;
    this.next = null;
  }
  if (array === null || array === undefined) {
    throw new Error('Creating list from undefined array');
  } else if (array.length === 0) {
    throw new Error('Creating list from empty array');
  } else {
    let ListTmp = new MyList(array[0]);
    const ListAnswer = ListTmp;
    for (let i = 1; i < array.length; i += 1) {
      const ListNext = new MyList(array[i]);
      ListTmp.next = ListNext;
      ListTmp = ListNext;
    }
    return ListAnswer;
  } 
}
