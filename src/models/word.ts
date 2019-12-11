export class Word {
  format: string;
  value: string;

  constructor(format?: string) {
      this.format = format || 'standard';
  }
}
