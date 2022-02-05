"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FootballReader_1 = require("./interface-refactor/FootballReader");
const Summary_1 = require("./composition/Summary");
/*
interface-refactor
conposition
*/
// const csvFileReader = new CSVfileReader('football.csv');
// const reader = new FootballReader(csvFileReader);
// reader.load();
const reader = FootballReader_1.FootballReader.fromCSV('football.csv');
reader.load();
// const summary = new Summary(new WinAnalysis('Man United'), new HtmlReport());
// need to create analsis obj and report obj when creating summary obj instead of doing that
const summary = Summary_1.Summary.winAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(reader.data);
