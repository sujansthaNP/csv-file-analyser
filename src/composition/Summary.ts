import { FootballData } from '../interface-refactor/FootballReader';
import { ConsoleReport } from './ConsoleReport';
import { HtmlReport } from './HtmlReport';
import { WinAnalysis } from './WinAnalysis';
export interface Analyzer {
  run(data: FootballData[]): string;
}
export interface OutputTarget {
  print(report: string): void;
}
export class Summary {
  static winAnalysisWithHtmlReport(teamName: string): Summary {
    return new Summary(new WinAnalysis(teamName), new HtmlReport());
  }
  constructor(public analysis: Analyzer, public report: OutputTarget) {}
  buildAndPrintReport(data: FootballData[]) {
    let report = this.analysis.run(data);
    this.report.print(report);
  }
}
