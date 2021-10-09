export const toTitleCase = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

export const toKebabCase = (str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();

export const score = function (a, b) { if (this === a) return 1; if (a === '') return 0; let c = 0; const d = a.length; let e = this; const f = e.length; let g; let h; let i = 1; let j; for (let k = 0, l, m, n, o, p, q; k < d; ++k) { n = a.charAt(k), o = e.indexOf(n.toLowerCase()), p = e.indexOf(n.toUpperCase()), q = Math.min(o, p), m = q > -1 ? q : Math.max(o, p); if (m === -1) { if (b) { i += 1 - b; continue; } return 0; }l = 0.1, e[m] === n && (l += 0.1), m === 0 ? (l += 0.6, k === 0 && (g = 1)) : e.charAt(m - 1) === ' ' && (l += 0.8), e = e.substring(m + 1, f), c += l; }h = c / d, j = (h * (d / f) + h) / 2, j /= i, g && j + 0.15 < 1 && (j += 0.15); return j; };

export const toPascalCase = (str) => {
  return str.replace(/[-_\s]+/g, ' ').split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join('');
};

export const pascelToTitleCase = (str) => {
  return str.replace(/([A-Z])/g, ' $1').replace(/^\s/, '');
};

export const numberToEnglish = (n, customJoinCharacter = ' ') => { const string = n.toString(); let units; let tens; let scales; let start; let end; let chunks; let chunksLen; let chunk; let ints; let i; let word; let words; const and = customJoinCharacter || 'and'; /* Is number zero? */if (parseInt(string) === 0) { return 'zero'; }/* Array of units as words */units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; /* Array of tens as words */tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']; /* Array of scales as words */scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion']; /* Split user arguemnt into 3 digit chunks from right to left */start = string.length; chunks = []; while (start > 0) { end = start; chunks.push(string.slice((start = Math.max(0, start - 3)), end)); }/* Check if function has enough scale words to be able to stringify the user argument */chunksLen = chunks.length; if (chunksLen > scales.length) { return ''; }/* Stringify each integer in each chunk */words = []; for (i = 0; i < chunksLen; i++) { chunk = parseInt(chunks[i]); if (chunk) { /* Split chunk into array of individual integers */ints = chunks[i].split('').reverse().map(parseFloat); /* If tens integer is 1, i.e. 10, then add 10 to units integer */if (ints[1] === 1) { ints[0] += 10; }/* Add scale word if chunk is not zero and array item exists */ if ((word = scales[i])) { words.push(word); }/* Add unit word if array item exists */ if ((word = units[ints[0]])) { words.push(word); }/* Add tens word if array item exists */ if ((word = tens[ints[1]])) { words.push(word); }/* Add 'and' string after units or tens integer if: */ if (ints[0] || ints[1]) { /* Chunk has a hundreds integer or chunk is the first of multiple chunks */if (ints[2] || !i && chunksLen) { words.push(and); } }/* Add hundreds word if array item exists */ if ((word = units[ints[2]])) { words.push(`${word} hundred`); } } } return words.reverse().join(' '); };
