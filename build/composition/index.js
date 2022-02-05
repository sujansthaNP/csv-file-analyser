"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FootballReader_1 = require("../interface-refactor/FootballReader");
const CSVfileReader_1 = require("../interface-refactor/CSVfileReader");
const matchResult_1 = require("../matchResult");
// import { FootballReader } from './abstract-refactor/FootballReader';
// const reader = new FootballReader('football.csv');
// reader.read();
const csvFileReader = new CSVfileReader_1.CSVfileReader('football.csv');
const reader = new FootballReader_1.FootballReader(csvFileReader);
reader.load();
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === matchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] == matchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`man united wins ${manUnitedWins} games`);
