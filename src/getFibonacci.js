function getFibonacci(index) {
  if (index === '0')
    throw `El indice colocado no posee un numero de fibonacci valido`;
  let n1 = 0,
    n2 = 1,
    nextTerm;
  let result;
  for (let i = 1; i <= index; i++) {
    result = nextTerm;
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  if (index === '1') return 0;
  return result;
}

module.exports = getFibonacci;
