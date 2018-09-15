/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  return preferences.reduce((count, value, index, loveArray) => { 
    return loveArray[loveArray[value - 1] - 1] === (index + 1) && value !== loveArray[value - 1] ? ++count : count;
  }, 0) / 3;
};
