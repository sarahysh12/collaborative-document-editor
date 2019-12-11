import { User } from './user';
import { Word } from './word';

export class Document {
  authors: User[];
  createdDate: Date;
  content: Word[];
  lastModifiedDate: Date;
  // usersCursors???
}
