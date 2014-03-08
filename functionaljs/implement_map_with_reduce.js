module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(mapped, item, index, array) {
    mapped.push(fn(item, index, array));
    return mapped;
  }, []);
};
