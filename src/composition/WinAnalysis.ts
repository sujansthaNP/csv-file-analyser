import { FootballData } from '../interface-refactor/FootballReader';
import { MatchResult } from '../matchResult';
import { Analyzer } from './Summary';

export class WinAnalysis implements Analyzer {
  constructor(public teamName: string) {}
  run(data: FootballData[]): string {
    let wins = 0;

    for (let match of data) {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] === this.teamName &&
        match[5] == MatchResult.AwayWin
      ) {
        wins++;
      }
    }
    return `Team "${this.teamName}" won "${wins}" games`;
  }
}
