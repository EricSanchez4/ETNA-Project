const drawSquare = (map: string[][], biggestSquare: any[]) => {
  const coord = biggestSquare[1];
  for (let i: number = 0; i < biggestSquare[0]; i++) {
    for (let j: number = 0; j < biggestSquare[0]; j++) {
      map[coord[0] + i][coord[1] + j] = "x";
    }
  }
  const result = map.map((row) => row.join("")).join("\n");

  return result;
};

export default drawSquare;
