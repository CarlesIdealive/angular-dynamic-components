import { Injectable } from '@angular/core';
import { Question } from '../interfaces/question';
import { QuestionText } from '../interfaces/questionText';

@Injectable({
  providedIn: 'root'
})
export class QuestionFactoryService {

  constructor() { }

  //TODO: pasar-li el ID que podria ser el nom de la pregunta
  createQuestion(type: string): Question {
    switch(type) {
      case 'text':
        return this.createTextQuestion();
      case 'longtext':
         return this.createLongTextQuestion();
      default:
        throw new Error('Unsupported activity type: ' + type);
    }
  }



  private createTextQuestion(maxlength: number = 100): QuestionText {
    return {
      type: 'text',
      required: false,
      maxlength
    };
  }

  private createLongTextQuestion(maxlength: number = 200): QuestionText {
    return {
      type: 'longtext',
      required: false,
      maxlength
    };
  }


}
