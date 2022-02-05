import { CSVfileReader } from './CSVfileReader';
import { dateStringToDate } from '../utils';
import { MatchResult } from '../matchResult';

export type FootballData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
interface DataReader {
  data: string[][];
  read(): void;
}
export class FootballReader {
  static fromCSV(fileName: string): FootballReader {
    return new FootballReader(new CSVfileReader(fileName));
  }
  data: FootballData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.data = this.reader.data.map(
      (row: string[]): FootballData => {
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
    );
  }
}
