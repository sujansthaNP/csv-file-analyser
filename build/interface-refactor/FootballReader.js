"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootballReader = void 0;
const CSVfileReader_1 = require("./CSVfileReader");
const utils_1 = require("../utils");
class FootballReader {
    constructor(reader) {
        this.reader = reader;
        this.data = [];
    }
    static fromCSV(fileName) {
        return new FootballReader(new CSVfileReader_1.CSVfileReader(fileName));
    }
    load() {
        this.reader.read();
        this.data = this.reader.data.map((row) => {
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                +row[3],
                +row[4],
                row[5],
                row[6],
            ];
        });
    }
}
exports.FootballReader = FootballReader;
