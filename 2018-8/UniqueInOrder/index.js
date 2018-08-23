var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  if (typeof iterable === 'string') {
    iterable = iterable.split('');
  }
  if (!iterable.length) return [];

  const ret = [iterable[0]];

  iterable.reduce((previousValue, currentValue, currentIndex) => {
    if (previousValue !== currentValue) {
      ret.push(currentValue);
    }
    return currentValue;
  })

  return ret;
}