module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>'],
    testMatch: [
      '**/__tests__/**/*.ts',
      '**/?(*.)+(spec|test).ts'
    ],
    collectCoverageFrom: [
        "*.ts",
      '**/*.ts',
      '!**/*.d.ts',
      '!**/*.test.ts',
      '!**/*.spec.ts'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'html']
  };