function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  if (type === 'SUM') {
    return roundedA + roundedB;
  } else if (type === 'SUBTRACT') {
    return roundedA - roundedB;
  } else if (type === 'DIVIDE' && roundedB !== 0) {
    return roundedA / roundedB;
  } else {
    return 'Error'
  }
}

module.exports = calculateNumber;
