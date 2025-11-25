module.exports = {
  // Archivos JavaScript/TypeScript
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],

  // Archivos de formato (JSON, CSS, MD)
  '*.{json,css,md}': ['prettier --write'],
};
