let progressBarLess: string = "----------------------------------------------------------------------------------------------------";
let progressBarMore: string = "";

const checkForObstacles = (map: string[][], i: number, j: number, k: number) => {
  for (let l = 0; l < k; l++) {
    for (let m = 0; m < k; m++) {
      if (map[i + l][j + m] !== ".") {
        return false;
      }
    }
  }
  return true;
};

const updateProgressBar = (testArray: string[]) => {
  progressBarLess = progressBarLess.slice(0, -1);
  progressBarMore = progressBarMore + "x";
  console.clear();
  testArray.forEach((line) => console.log(line));
  console.log("[" + progressBarMore + progressBarLess + "]");
};

const resetProgressBar = () => {
  progressBarLess = "----------------------------------------------------------------------------------------------------";
  progressBarMore = "";
};

const squareFinder = (map: string[][], testArray: string[]) => {
  const biggestSquareCoord: any[] = [0, [0, 0], [0, 0]];
  const modulateBy: number = (map.length - 1) / 100;

  for (let i = 0; i < map.length; i++) {
    if (biggestSquareCoord[0] >= map.length - i) break;
    if (i % modulateBy === 0) updateProgressBar(testArray);
    for (let j = 0; j < map[i].length; j++) {
      if (biggestSquareCoord[0] >= map[i].length - j) break;
      for (let k = 0; k < map.length; k++) {
        if (checkForObstacles(map, i, j, k)) {
          if (k > biggestSquareCoord[0]) {
            biggestSquareCoord[0] = k;
            biggestSquareCoord[1] = [i, j];
            biggestSquareCoord[2] = [i + k - 1, j + k - 1];
          }
        }
      }
    }
  }
  resetProgressBar();

  return biggestSquareCoord;
};

export default squareFinder;
