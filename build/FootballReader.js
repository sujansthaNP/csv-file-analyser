"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootballReader = void 0;
const CSVfileReader_1 = require("./CSVfileReader");
const utils_1 = require("./utils");
class FootballReader extends CSVfileReader_1.CSVfileReader {
    mapRow(row) {
        return [
            (0, utils_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            +row[3],
            +row[4],
            row[5],
            row[6],
        ];
    }
}
exports.FootballReader = FootballReader;
