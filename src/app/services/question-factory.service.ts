import { Injectable } from '@angular/core';
import { Question } from '../../interfaces/question';
import { QuestionText } from '../../interfaces/questionText';

@Injectable({
  providedIn: 'root'
})
export class QuestionFactoryService {

  constructor() { }


  createQuestion(type: string): Question {
    switch(type) {
      case 'text':
        return this.createTextQuestion();
      case 'longtext':
         return this.createTextQuestion(200);
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

  

}
