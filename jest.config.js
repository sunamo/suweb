module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/test/**/*.spec.ts"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/types/**/*.ts",
  ],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  globals: {
    "ts-jest": {
      diagnostics: false,
      isolatedModules: true,
    },
  },
  modulePathIgnorePatterns: ["<rootDir>/lib/"],
  // Ensure Jest ignores JavaScript files and only uses TypeScript
  // přidám i js, nevadí to protože jsou ignorovány přes moduleFileExtensions. jest to ale takto vyžaduje
  moduleFileExtensions: ["ts", "tsx", "json", "js"],
  testPathIgnorePatterns: ["/node_modules/", "/lib/", "\\.js$", "\\.js\\.map$"],
  // Explicitly exclude .js files from being resolved
  modulePathIgnorePatterns: ["<rootDir>/lib/", "\\.js$"],
  // Force Jest to resolve .ts files first
  extensionsToTreatAsEsm: [],
  resolver: undefined,
};
