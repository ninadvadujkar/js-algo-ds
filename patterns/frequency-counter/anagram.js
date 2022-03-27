const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (const char of str1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!lookup[char]) {
      return false;
    }
    lookup[char] -= 1;
  }
  return true;
}

validAnagram('anagram', 'nagaram');
