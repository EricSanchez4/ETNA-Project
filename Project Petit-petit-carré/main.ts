import convert from "./conversion";
import squareFinder from "./squareFinder";
import drawSquare from "./drawSquare";
import { argv } from "node:process";
import { readTextFile } from "./utils";

const textFile: string = readTextFile(`mouli_maps/${process.argv[2]}`);

const main = (textFile: string, testArray: string[] = []) => {
  if (textFile) {
    const mapArray: string[][] = convert(textFile);
    const biggestSquareCoord: any[] = squareFinder(mapArray, testArray);
    const drawnedMap: string = drawSquare(mapArray, biggestSquareCoord);

    return drawnedMap;
  }
  return "This map doesn't exist";
};

export default main;

console.log(main(textFile));
