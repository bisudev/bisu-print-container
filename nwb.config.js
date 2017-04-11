module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'BisuPrintContainer',
      externals: {
        react: 'React'
      }
    }
  }
}
