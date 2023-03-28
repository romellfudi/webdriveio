import fs from "fs";

export const getWordsData = JSON.parse(
  fs.readFileSync("test/data/data.json")
);
