export interface Segment {
  text: string;
  translation?: string;
}

export interface Line {
  english: string;
  japanese: string;
  segments: Segment[];
}

export interface Page {
  page: number;
  content: Line[];
}

export interface BookData {
  id: number;
  title: string;
  pages: Page[];
}
