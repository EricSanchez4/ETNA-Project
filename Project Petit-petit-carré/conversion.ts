const convert = (input: string): string[][] => {
  const mapArray: string[][] = input.split("\n").map((line) => {
    return line.split("");
  });

  mapArray.shift();

  return mapArray;
};

export default convert;
