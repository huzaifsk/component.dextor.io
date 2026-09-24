import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.resolve(__dirname, "src/components/index.ts");

const jsPlugins = (outDir) => [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  typescript({
    tsconfig: "./tsconfig.lib.json",
    declaration: false,
    outDir,
  }),
  terser(),
];

export default [
  {
    input,
    output: {
      file: "./cjs/index.cjs",
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
    plugins: jsPlugins("./cjs"),
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
  {
    input,
    output: {
      file: "./esm/index.esm.js",
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
    plugins: jsPlugins("./esm"),
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
  {
    input,
    output: { file: "./esm/index.d.ts", format: "esm" },
    plugins: [dts({ tsconfig: "./tsconfig.lib.json" })],
  },
  {
    input,
    output: { file: "./cjs/index.d.ts", format: "esm" },
    plugins: [dts({ tsconfig: "./tsconfig.lib.json" })],
  },
];
