function digital_root(input) {
  if (input % 10 === input) {
    return input;
  }
  return input.toString().split('').reduce((previousValue, currentValue) => {
    return digital_root(parseInt(previousValue) + parseInt(currentValue));
  })
}