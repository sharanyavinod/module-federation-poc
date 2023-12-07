import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

export default {
  input: "src/index.jsx",
  output: {
    file: ".vercel/output/test.js",
    format: "es",
    name: "RemoteApp",
    // sourcemap: "inline",
    // inlineDynamicImports: true,
    // globals: {
    //   "react/jsx-runtime": "jsxRuntime",
    //   "react-dom/client": "ReactDOM",
    //   react: "React",
    // },
  },
  plugins: [
    resolve(),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: [["@babel/preset-react", { runtime: "automatic" }]],
      plugins: ["@babel/plugin-syntax-dynamic-import"],
    }),
    // replace({
    //   'Object.defineProperty(exports, "__esModule", { value: true });': "",
    //   delimiters: ["\n", "\n"],
    // }),
  ],
};
