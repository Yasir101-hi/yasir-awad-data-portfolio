import { readFileSync, writeFileSync } from "node:fs";

const path = "App.tsx";
let source = readFileSync(path, "utf8");

source = source.replace(
  /name: \"Cairo, Egypt\",\s*href: \"https:\/\/www\.google\.com\/maps\/search\/\?api=1&query=Cairo%2C%20Egypt\",\s*external: true,/,
  'name: "Available for Work",\n    href: "#contact",\n    external: false,'
);

writeFileSync(path, source);
