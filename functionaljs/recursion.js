function getDependencies(tree) {
  function _getDependencies(tree, dependencies) {
    if (!('dependencies' in tree)) {
      return dependencies;
    }

    Object.keys(tree.dependencies).forEach(function(k) {
      var dependency = k + '@' + tree.dependencies[k].version;

      if (dependencies.indexOf(dependency) === -1) {
        dependencies.push(dependency);
      }

      if ('dependencies' in tree.dependencies[k]) {
        _getDependencies(tree.dependencies[k], dependencies);
      }
    });

    return dependencies;
  }

  return _getDependencies(tree, []).sort();
}

module.exports = getDependencies;
