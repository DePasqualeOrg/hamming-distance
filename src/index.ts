const hexToBinary = (input: string) => {
  const inputTrimmed = input.replace(/^0x/, '');
  if (!/^[0-9a-fA-F]+$/.test(inputTrimmed)) {
    throw new Error(`${input} is not a valid hex value.`);
  }
  return (parseInt(inputTrimmed, 16).toString(2)).padStart(inputTrimmed.length * 4, '0');
};

export default (a: string, b: string, format: 'hex' | 'binary' = 'hex') => {
  let aBin;
  let bBin;
  if (format === 'hex') {
    aBin = hexToBinary(a);
    bBin = hexToBinary(b);
  } else if (format === 'binary') {
    aBin = a;
    bBin = b;
  } else {
    throw new Error('Format must be \'hex\' or \'binary\'');
  }
  if (aBin.length !== bBin.length) {
    throw new Error(`The two values being compared (${a} and ${b}) must have equal lengths.`);
  }
  let hammingDistance = 0;
  for (let i = 0; i < aBin.length; i++) {
    if (aBin[i] !== bBin[i]) {
      hammingDistance += 1;
    }
  }
  return hammingDistance;
};
