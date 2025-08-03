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
      '\\.svg\\?url$': '<rootDir>/tests/__mocks__/fileMock.ts'
  }
};

export default config;