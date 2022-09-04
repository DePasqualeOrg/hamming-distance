# Hamming distance

https://en.wikipedia.org/wiki/Hamming_distance

### Installation

```
npm install @depasquale/hamming-distance
```

### Usage

```javascript
import hammingDistance from '@depasquale/hamming-distance';

const hDistBinary = hammingDistance('1111', '1110', 'binary');

// 'hex' is the default value and can be omitted.
const hDistHex = hammingDistance('ffff', 'fffe', 'hex');
```

