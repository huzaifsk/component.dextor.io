import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import path from "path";

export default {
  input: path.resolve(__dirname, "src/components/index.js"),
  output: [
    {
      file: "dist/index.cjs.js", // CommonJS output
      format: "cjs",
      exports: "named",
    },
    {
      file: "dist/index.esm.js", // ES module output
      format: "esm",
      exports: "named",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(), // Resolves node modules
    commonjs(), // Converts CommonJS to ES modules
    babel({
      exclude: "node_modules/**", // Exclude dependencies
      babelHelpers: "bundled", // Necessary for Babel to work correctly
      presets: ["@babel/preset-react"], // Add JSX support
    }),
    terser(), // Minify the output
  ],
  external: ["react", "react-dom"], // Marks React and ReactDOM as external
};
