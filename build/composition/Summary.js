"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const HtmlReport_1 = require("./HtmlReport");
const WinAnalysis_1 = require("./WinAnalysis");
class Summary {
    constructor(analysis, report) {
        this.analysis = analysis;
        this.report = report;
    }
    static winAnalysisWithHtmlReport(teamName) {
        return new Summary(new WinAnalysis_1.WinAnalysis(teamName), new HtmlReport_1.HtmlReport());
    }
    buildAndPrintReport(data) {
        let report = this.analysis.run(data);
        this.report.print(report);
    }
}
exports.Summary = Summary;
