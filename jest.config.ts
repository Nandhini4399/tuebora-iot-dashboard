import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.module\\.(css|scss)$': '<rootDir>/tests/__mocks__/styleMock.ts',
    // '\\.(css|scss)$': '<rootDir>/tests/__mocks__/styleMock.js' // optional: if using global styles
  },
};

export default config;