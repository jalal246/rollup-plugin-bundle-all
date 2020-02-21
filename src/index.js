/**
 * pluging to resolve @mono/projects to src
 * bundle all in umd
 * prevent duplicated function
 * @return {String} resolved project
 */
function getPeerSrc() {
  return {
    resolveId(importee) {
      return importee.includes(PROJ) && !importee.includes(SRC)
        ? require.resolve(`${importee}/${SRC}`)
        : null;
    }
  };
}
