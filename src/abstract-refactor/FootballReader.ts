import { CSVfileReader } from './CSVfileReader';
import { MatchResult } from '../matchResult';
import { dateStringToDate } from '../utils';
type FootballData = [Date, string, string, number, number, MatchResult, string];

export class FootballReader extends CSVfileReader<FootballData> {
  mapRow(row: string[]): FootballData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      +row[3],
      +row[4],
      row[5] as MatchResult,
      row[6],
    ];
  }
}
