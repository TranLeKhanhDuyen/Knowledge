module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    // @components
    '^@components': '<rootDir>/src/components/index.ts',
    // service
    '^@services': '<rootDir>/src/services/index.ts',
    // @constants
    '^@constants': '<rootDir>/src/constants/index.ts',
    // @layout
    '^@layout': '<rootDir>/src/layout/index.ts',
    // @pages
    '^@pages': '<rootDir>/src/pages/index.ts',
    // assets
    '^@assets/(.*)$': '<rootDir>/src/constants/images.ts',
  }
}
