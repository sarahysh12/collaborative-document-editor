import { Component } from '@angular/core';
import { Word } from 'src/models/word';


@Component({
  selector: 'app-shared-document',
  templateUrl: './shared-document.component.html',
  styleUrls: ['./shared-document.component.css']
})

export class SharedDocumentComponent {
  words: Word[] = [];
  selectedFormat = 'Standard';
  content: string;


  // TODO delete/modify word from array when it is deleted/modified
  onTextAreaValueChanges() {
    if (this.content[this.content.length - 1] === ' ') {
      const temp = this.content.split(' ');
      if (temp[temp.length - 2] !== ' ') {
        const newWord = new Word();
        newWord.format = this.selectedFormat;
        newWord.value = temp[temp.length - 2];
        this.words.push(newWord);
      }
    }
  }

  onClickFormat(format: string) {
    this.selectedFormat = format;
  }

  displayWords() {
    for (const word of this.words) {
      console.log(word.value, word.format);
    }
  }
}
