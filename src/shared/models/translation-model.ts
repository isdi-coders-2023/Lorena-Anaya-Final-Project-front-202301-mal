export interface Translation {
  bookingRef: string;
  dueDate: Date;
  languageFrom: string;
  languageTo: string;
  words: Number;
  status: string;
  toTranslateDoc: string;
  translatedDoc: string;
}
