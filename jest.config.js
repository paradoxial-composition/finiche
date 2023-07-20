module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
      '^.+\\.ts?$': 'ts-jest',
      '^.+\\.jsx?$': 'babel-jest',
    },
  };