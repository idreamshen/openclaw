import { defineConfig } from "tsdown";

const env = {
  NODE_ENV: "production",
};

export default defineConfig([
  {
    entry: "src/index.ts",
    env,
    fixedExtension: false,
    platform: "node",
  },
  {
    entry: "src/entry.ts",
    env,
    fixedExtension: false,
    platform: "node",
  },
  {
    dts: true,
    entry: "src/plugin-sdk/index.ts",
    outDir: "dist/plugin-sdk",
    env,
    fixedExtension: false,
    platform: "node",
  },
  {
    entry: "src/extensionAPI.ts",
    env,
    fixedExtension: false,
    platform: "node",
  },
  // Bundled hooks
  {
    entry: "src/hooks/bundled/boot-md/handler.ts",
    outDir: "dist/hooks/bundled/boot-md",
    env,
    fixedExtension: false,
    platform: "node",
  },
  {
    entry: "src/hooks/bundled/command-logger/handler.ts",
    outDir: "dist/hooks/bundled/command-logger",
    env,
    fixedExtension: false,
    platform: "node",
  },
  {
    entry: "src/hooks/bundled/session-memory/handler.ts",
    outDir: "dist/hooks/bundled/session-memory",
    env,
    fixedExtension: false,
    platform: "node",
  },
  {
    entry: "src/hooks/bundled/soul-evil/handler.ts",
    outDir: "dist/hooks/bundled/soul-evil",
    env,
    fixedExtension: false,
    platform: "node",
  },
]);
