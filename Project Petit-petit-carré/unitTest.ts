import * as fs from "fs";
import main from "./main";
import { readTextFile } from "./utils";

const allMaps: string[] = [
  "intermediate_map_one_empty_box",
  "intermediate_map_one_filled_box",
  "intermediate_map_one_empty_column",
  "intermediate_map_one_filled_column",
  "intermediate_map_one_column_with_obstacles_25pc",
  "intermediate_map_one_column_with_obstacles_50pc",
  "intermediate_map_one_column_with_obstacles_75pc",
  "intermediate_map_one_empty_line",
  "intermediate_map_one_filled_line",
  "intermediate_map_one_line_with_obstacles_25pc",
  "intermediate_map_one_line_with_obstacles_50pc",
  "intermediate_map_one_line_with_obstacles_75pc",
  "intermediate_map_empty_corners",
  "intermediate_map_filled_corners",
  "intermediate_map_97_21_empty",
  "intermediate_map_97_21_filled",
  "intermediate_map_97_21_with_obstacles_25pc",
  "intermediate_map_97_21_with_obstacles_50pc",
  "intermediate_map_34_137_empty",
  "intermediate_map_34_137_filled",
  "intermediate_map_34_137_with_obstacles_25pc",
  "intermediate_map_34_137_with_obstacles_50pc",
  "intermediate_map_34_137_with_obstacles_75pc",
  "intermediate_map_187_187_empty",
  "intermediate_map_187_187_filled",
  "intermediate_map_187_187_with_obstacles_25pc",
  "intermediate_map_187_187_with_obstacles_50pc",
  "intermediate_map_187_187_with_obstacles_75pc",
  "intermediate_map_97_21_with_obstacles_75pc",
  "intermediate_map_100_100",
  "intermediate_map_200_200",
  "intermediate_map_500_500",
  "intermediate_map_500_500_2",
  "intermediate_map_500_500_3",
  "intermediate_map_1000_1000",
  "intermediate_map_1000_1000_2",
  "intermediate_map_5000_5000",
  "intermediate_map_2000_2000",
  "intermediate_map_10000_10000",
];

const unitTest = () => {
  const results: string[] = [];

  allMaps.forEach((map: string) => {
    const mapToTest: string = readTextFile(`mouli_maps/${map}`);
    const solvedMap: string = readTextFile(`mouli_maps_solved/${map}`);
    const resolvedMap = main(mapToTest, results);
    if (resolvedMap === solvedMap) {
      results.push(`${map} is \u001b[32m OK\u001b[0m`);
    } else {
      results.push(`${map} is \u001b[31m KO\u001b[0m`);
    }
  });
};

unitTest();
