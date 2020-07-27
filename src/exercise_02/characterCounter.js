export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.
  let answer;
  if (string === null || string === undefined || string.length === 0) {
    answer = 0;
  } else if (prediction === undefined) {
    answer = string.length;
  } else {
    let num = 0;
    for (let i = 0; i < string.length; i += 1) {
      if (prediction(string[i]) === true) {
        num += 1;
      }
    }
    answer = num;
  }
  return answer;
}
