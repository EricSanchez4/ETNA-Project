import * as fs from "fs";

export const readTextFile: any = (path: string) => {
  if (path !== "") {
    try {
      const promise = fs.readFileSync(path, "utf8");
      return promise;
    } catch (error) {
      console.error("This map doesn't exist");
    }
  } else {
    console.error("Please enter a map name");
  }
};
