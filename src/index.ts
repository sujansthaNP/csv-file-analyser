import { FootballReader } from './interface-refactor/FootballReader';
import { Summary } from './composition/Summary';

/*
interface-refactor
conposition
*/
// const csvFileReader = new CSVfileReader('football.csv');
// const reader = new FootballReader(csvFileReader);
// reader.load();
const reader = FootballReader.fromCSV('football.csv');
reader.load();
// const summary = new Summary(new WinAnalysis('Man United'), new HtmlReport());
// need to create analsis obj and report obj when creating summary obj instead of doing that
const summary = Summary.winAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(reader.data);
