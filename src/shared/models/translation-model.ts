export interface Translation {
  bookingRef: string;
  dueDate: Date;
  languageFrom: string;
  languageTo: string;
  words: number;
  status: string;
  toTranslateDoc: string;
  translatedDoc: string;
}
